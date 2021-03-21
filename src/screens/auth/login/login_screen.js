import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import { Container, Content, Form, Input, Item, Label, Icon } from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { signin } from 'actions/users';
import { ShowToast } from 'components';
import styles from './login_style';

const LoginScreen = (props) => {

    const [hidePassword, setHidePassword] = useState(true)
    const [icon, setIcon] = useState('eye-off')
    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const _changeIcon = () => {
        setHidePassword(!hidePassword)
        setIcon(icon === 'eye' ? 'eye-off' : 'eye')
    }

    const _doLogin = async () => {
        const foundUser = props.users.listUser.filter(item => {
            return form.username.toLowerCase() == item.username.toLowerCase() && form.password == item.password
        })

        if ( foundUser.length == 0 ) {
            ShowToast('Username atau password salah', 'danger')
        }else{
            const token = foundUser[0].token
            await AsyncStorage.setItem('userToken', token);
            props.dispatch(signin(foundUser[0], token))
        }
        // props.navigation.navigate('Home')
    }

    return(
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Content showsVerticalScrollIndicator={false} style={styles.content} enableOnAndroid>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Simple POS</Text>
                    <Text style={styles.headerDesc}>Silahkan login untuk melanjutkan</Text>
                </View>
                <View style={styles.form}>
                    <Form>
                        <Item floatingLabel style={{...styles.item, marginBottom: -5}}>
                            <Icon type="MaterialCommunityIcons" name="account-circle" style={styles.icon} />
                            <Label style={styles.label}>Username</Label>
                            <Input 
                                style={styles.inputText}
                                maxLength={40}
                                autoCompleteType='off'
                                onChangeText={text => setForm({...form, username: text})}
                            />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Icon type="MaterialCommunityIcons" name="lock" style={styles.icon} />
                            <Label style={styles.label}>Password</Label>
                            <Input 
                                style={styles.inputText} 
                                secureTextEntry={hidePassword}
                                onChangeText={text => setForm({...form, password: text})}
                            />
                            <Icon type="MaterialCommunityIcons" name={icon} style={styles.icon} onPress={_changeIcon} />
                        </Item>

                        <TouchableOpacity activeOpacity={0.7} style={form.username.length > 3 && form.password.length> 3 ? styles.btnLoginActive : styles.btnLogin} disabled={form.username.length > 3 && form.password.length> 3 ? false : true} onPress={_doLogin}>
                            <Text style={form.username.length > 3 && form.password.length> 3 ? styles.textLoginActive : styles.textLogin}>Sign in</Text>
                            {/* {
                                props.auth.isLoading &&
                                    <ActivityIndicator size="small" color={'#FFFFFF'} style={{marginLeft: 10}} />
                            } */}
                        </TouchableOpacity>
                        <View style={styles.bottomWrapper}>
                            <Text style={styles.txtBottom}>Belum punya akun ?</Text>
                            <TouchableOpacity activeOpacity={0.6} style={styles.btnRegister} onPress={() => props.navigation.navigate('Register')}>
                                <Text style={styles.txtRegister}>Daftar Disini</Text>
                            </TouchableOpacity>
                        </View>
                    </Form>
                </View>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
      users: state.users,
    }
}

export default connect (mapStateToProps) (LoginScreen)

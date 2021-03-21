import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native';
import { Container, Content, Form, Input, Item, Label, Icon, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import UUIDGenerator from 'react-native-uuid-generator';

import { register } from 'actions/users';
import { ShowToast } from 'components';
import styles from './register_style';

const RegisterScreen = (props) => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })
    const [propsPassword, setPropsPassword] = useState({
        iconPassword: 'eye',
        hidePassword: true
    })
    const [propsConfirm, setPropsConfirm] = useState({
        iconConfirm: 'eye',
        hideConfirm: true
    })

    const _changeIconPassword = () => {
        setPropsPassword(prevState => ({
            iconPassword: prevState.iconPassword === 'eye' ? 'eye-off' : 'eye',
            hidePassword: !prevState.hidePassword
        }));
    }

    const _changeIconConfirm = () => {
        setPropsConfirm(prevState => ({
            iconConfirm: prevState.iconConfirm === 'eye' ? 'eye-off' : 'eye',
            hideConfirm: !prevState.hideConfirm
        }));
    }

    const _doRegister = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const checkEmail = reg.test(form.email)

        if(form.username.length === 0){
            ShowToast('Username wajib diisi', 'danger')
        }else if(form.username.length < 3){
            ShowToast('Username minimal harus 3 karakter', 'danger')
        }else if(form.email.length === 0){
            ShowToast('Email wajib diisi', 'danger')
        }else if(!checkEmail){
            ShowToast('Format email salah', 'danger')
        }else if(form.password.length === 0){
            ShowToast('Password harus diisi', 'danger')
        }else if(form.password.length < 6){
            ShowToast('Password minimal harus 6 karakter', 'danger')
        }else if(form.confirm_password !== form.password){
            ShowToast('Password dan konfirmasi password harus sama', 'danger')
        }else{
            const foundUsername = props.users.listUser.filter(item => {
                return form.username.toLowerCase() == item.username.toLowerCase()
            })

            const foundEmail = props.users.listUser.filter(item => {
                return form.email.toLowerCase() == item.email.toLowerCase()
            })

            if(foundUsername.length > 0){
                ShowToast('Username telah digunakan')
                return;
            }

            if(foundEmail.length > 0){
                ShowToast('Email telah digunakan')
                return;
            }

            UUIDGenerator.getRandomUUID((uuid) => {
                const generateId = '_' + Math.random().toString(36).substr(2, 9);
                const data = {
                    id: generateId,
                    username: form.username,
                    email: form.email,
                    password: form.password,
                    token: uuid
                }
                props.dispatch(register(data))
                ShowToast('Register berhasil, silahkan login', 'success')
                props.navigation.goBack()
            });
        }
    }

    return(
        <Container>
            <Content showsVerticalScrollIndicator={false} style={styles.content} enableOnAndroid>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Simple POS</Text>
                    <Text style={styles.headerDesc}>Silahkan isi data dibawah ini</Text>
                </View>

                <Form>
                    <Item floatingLabel style={{...styles.item, marginBottom: -5}}>
                        <Icon type="MaterialCommunityIcons" name="account-circle" style={styles.icon} />
                        <Label style={styles.label}>Username</Label>
                        <Input 
                            style={styles.inputText}
                            maxLength={40}
                            onChangeText={(text) => setForm({...form, username: text})}
                        />
                    </Item>
                    <Item floatingLabel style={{...styles.item, marginBottom: -5}}>
                        <Icon type="MaterialCommunityIcons" name="email" style={styles.icon} />
                        <Label style={styles.label}>Email</Label>
                        <Input 
                            style={styles.inputText}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            maxLength={40}
                            autoCompleteType='off'
                            onChangeText={(text) => setForm({...form, email: text})}
                        />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Icon type="MaterialCommunityIcons" name="lock" style={styles.icon} />
                        <Label style={styles.label}>Password</Label>
                        <Input 
                            secureTextEntry={propsPassword.hidePassword} 
                            style={styles.inputText} 
                            autoCapitalize={'none'}
                            onChangeText={(text) => setForm({...form, password: text})}
                        />
                        <Icon type="MaterialCommunityIcons" name={propsPassword.iconPassword} style={styles.icon} onPress={_changeIconPassword} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Icon type="MaterialCommunityIcons" name="lock" style={styles.icon} />
                        <Label style={styles.label}>Konfirmasi Password</Label>
                        <Input 
                            secureTextEntry={propsConfirm.hideConfirm} 
                            style={styles.inputText}
                            autoCapitalize={'none'}
                            onChangeText={(text) => setForm({...form, confirm_password: text})}
                        />
                        <Icon type="MaterialCommunityIcons" name={propsConfirm.iconConfirm} style={styles.icon} onPress={_changeIconConfirm} />
                    </Item>
                </Form>
                
                <TouchableOpacity activeOpacity={0.7} style={styles.btnRegister} onPress={_doRegister}>
                    <Text style={styles.textRegister}>Register</Text>
                    {/* {
                        props.auth.isLoading &&
                            <ActivityIndicator size="small" color={'#FFFFFF'} style={{marginLeft: 10}} />
                    } */}
                </TouchableOpacity>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
      users: state.users,
    }
}

export default connect (mapStateToProps) (RegisterScreen)
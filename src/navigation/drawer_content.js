import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Icon, Item } from 'native-base';
import { Drawer } from "react-native-paper";
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { signout } from 'actions/users';
import img from 'images';

const DrawerContent = (props) => {
    
    const onSignOut = async () => {
        await AsyncStorage.clear().then(() => {
            props.dispatch(signout())
        })
    }

    return(
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.userInfoSection}>
                <Image source={img.User} style={styles.imgUser} />
                <Text style={styles.userEmail}>{props.users.dataUser.email}</Text>
                <Text style={styles.userName}>{props.users.dataUser.username}</Text>
            </View>
            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                        type="Ionicons"
                        name="home"
                        style={{color, fontSize: size}}
                        />
                    )}
                    label={({color}) => (
                        <Text style={{color}}>
                            Home
                        </Text>
                    )}
                    onPress={() => props.navigation.navigate('Home')}
                    activeBackgroundColor="#FFF5F5"
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        type="MaterialIcons"
                        name="assignment"
                        style={{color, fontSize: size}}
                        />
                    )}
                    label={({color}) => (
                        <Text style={{color}}>
                            Riwayat Transaksi
                        </Text>
                    )}
                    onPress={() => props.navigation.navigate('History')}
                    activeBackgroundColor="#FFF5F5"
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                        type="MaterialCommunityIcons"
                        name="exit-to-app"
                        style={{color, fontSize: size}}
                        />
                    )}
                    label={({color}) => (
                        <Text style={{color}}>
                            Sign Out
                        </Text>
                    )}
                    onPress={onSignOut}
                    activeBackgroundColor="#FFF5F5"
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
        paddingTop: 0
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        backgroundColor: '#FF5353',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    imgUser:{
        width: 75,
        height: 75,
        resizeMode: 'contain',
        marginTop: 10
    },
    userEmail:{
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#ffffff',
        opacity: 0.8,
        marginTop: 8
    },
    userName:{
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#ffffff'
    },
    drawerSection: {
        marginTop: 15,
    },
})

const mapStateToProps = (state) => {
    return{
      users: state.users,
    }
}

export default connect (mapStateToProps) (DrawerContent)
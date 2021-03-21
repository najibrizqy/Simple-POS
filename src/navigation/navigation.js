import React, {useEffect, useState} from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import SplashScreen from './../screens/splash_screen';
import DrawerContent from './drawer_content';
import LoginScreen from './../screens/auth/login/login_screen';
import RegisterScreen from './../screens/auth/register/register_screen';
import HomeScreen from './../screens/main/home/home_screen';
import PayScreen from './../screens/main/home/pay/pay_screen';
import HistoryScreen from './../screens/main/history/history_screen';

import { retrieveToken } from 'actions/users';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = (props) => {

  // useEffect(async () => {
  //   const userToken = await AsyncStorage.getItem('userToken')
  //   props.dispatch(retrieveToken(userToken))
  // }, [])

  const mainStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pay" component={PayScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {
        props.users.userToken ?
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{swipeEnabled: false}}>
            <Drawer.Screen name="Home" component={mainStack} />
            <Drawer.Screen name="History" component={HistoryScreen} />
          </Drawer.Navigator> 
        : 
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
      } 
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return{
    users: state.users,
  }
}

export default connect (mapStateToProps) (Navigation);
import React, {useEffect} from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

import img from 'images';

const SplashScreen = (props) =>  {

    const _navigateTo = (routeName) => {
        const actionToDispatch = CommonActions.reset({
          index: 0,
          routes: [{name: routeName}]
        })
        props.navigation.dispatch(actionToDispatch)
    }

    useEffect(() => {
        const timer = setTimeout(async () => {
            _navigateTo(props.users.userToken ? 'Home' : 'Login')
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={[styles.container, styles.center]}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <Image source = {img.SplashScreen} style={{ width: '100%',height: '100%'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
    },
})

const mapStateToProps = (state) => {
    return{
      users: state.users,
    }
}

export default connect (mapStateToProps) (SplashScreen)
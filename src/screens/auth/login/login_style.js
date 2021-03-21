import {StyleSheet} from 'react-native';

const btnLogin = {
    marginTop: 25,
    paddingVertical: 15,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
}
const txtLogin = {
    fontFamily: 'Roboto-Medium',
    fontSize: 16
}

module.exports = StyleSheet.create({
    content:{
        paddingHorizontal: 20,
    },
    header:{
        marginTop: 100
    },
    headerTitle:{
        fontFamily: 'Roboto-Bold',
        fontSize: 31,
        color: '#FF5353'
    },
    headerDesc:{
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#333333'
    },
    form:{
        marginTop: 50
    },
    item:{
        marginLeft: 0,
        paddingBottom: 8,
    },
    label:{
        marginLeft: 5,
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#BDBDBD'
    },
    icon:{
        color: '#828282',
        fontSize: 24,
        marginBottom: -3
    },
    inputText:{
        fontSize: 15,
        color: '#333333',
        fontFamily: 'Roboto',
        paddingLeft: 0,
        paddingBottom: 0
    },
    btnLogin:{
        ...btnLogin,
        backgroundColor: '#F2F2F2',
    },
    btnLoginActive:{
        ...btnLogin,
        backgroundColor: '#FF5353',
    },
    textLogin:{
        ...txtLogin,
        color: '#828282',
    },
    textLoginActive:{
        ...txtLogin,
        color: '#FFFFFF',
    },
    textForgot:{
        textAlign:'center',
        color: '#FF5353',
        marginTop: 15,
        fontFamily: 'Roboto-Medium'
    },
    bottomWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20
    },
    btnBottom:{
        borderWidth: 1,
        borderColor: '#FF5353',
        borderRadius: 3,
        alignItems: 'center',
        paddingVertical: 15,
        width: '47.5%'
    },
    textBottom:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#FF5353'
    },
    btnSocialWrapper:{
        marginVertical: 30,
    },
    btnSocial:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF5353',
        borderRadius: 3,
        marginBottom: 10,
        paddingVertical: 13,
    },
    iconSocial:{
        color: '#FFFFFF',
        marginHorizontal: 35,
        fontSize: 24
    },
    textSocial:{
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#FFFFFF'
    },
    bottomWrapper:{
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'center'
    },
    txtBottom:{
        fontFamily: 'Roboto',
        fontSize: 14

    },
    btnRegister:{
        marginLeft: 5
    },
    txtRegister:{
        fontFamily: 'Roboto-Medium',
        color: '#FF5353'
    }
})
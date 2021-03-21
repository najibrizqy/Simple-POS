import {StyleSheet} from 'react-native';

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
    privacyWrapper:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 30
    },
    checkBox:{
        marginRight: 20,
        marginLeft: -10,
        borderColor: '#BDBDBD'
    },
    textPrivacy:{
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#4F4F4F'
    },
    privacyBtn:{
        color: '#FF5353'
    },
    btnRegister:{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 3,
        marginBottom: 20,
        backgroundColor: '#FF5353',
    },
    textRegister:{
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#ffffff',
    },
})
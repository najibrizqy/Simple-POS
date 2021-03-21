import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    header:{
        backgroundColor: '#FF5353',
        paddingTop: 40, 
        paddingBottom: 15, 
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnMenu:{
        paddingRight: 20
    },
    iconMenu:{
        color: '#ffffff',
        fontSize: 20
    },
    titleWrapper:{
        height: 38,
        justifyContent: 'center'
    },
    headerTitle:{
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#ffffff',
        opacity: 0.9,
    },
    btnSearch:{
        marginLeft: 'auto'
    },
    iconSearch:{
        fontSize: 24,
        color: '#ffffff'
    },
    iconSearchInput:{
        fontSize: 24,
        color: '#BDBDBD'
    },
    iconClose:{
        fontSize: 24,
        color: '#ffffff',
    },
    input:{
        width: '75%',
        borderRadius: 5,
        backgroundColor: '#ffffff',
        height: 38
    },
    txtInput:{
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
    },
    content:{
        paddingHorizontal: 20
    },
    bottomView:{
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#E0E0E0'
    },
    btnBottom:{
        borderRadius: 3,
        backgroundColor: '#FF5353',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    totalItem:{
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 14,
    },
    textTotalPrice:{
        marginLeft: 'auto',
        color: '#FFFFFF',
        fontFamily: 'Roboto-Bold',
        fontSize: 16
    },
})
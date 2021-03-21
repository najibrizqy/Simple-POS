import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    header:{
        backgroundColor: '#FF5353',
        paddingTop: 40, 
        paddingBottom: 15, 
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnBack:{
        paddingHorizontal: 20,
    },
    iconBack:{
        fontSize: 20,
        color: '#ffffff'
    },
    headerTitle:{
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#ffffff',
        opacity: 0.9
    },
    itemWrapper:{
        marginTop: 20,
        flexDirection: 'row'
    },
    thumbnailWrapper:{
        width: 91,
        height: 91,
        backgroundColor: '#F2F2F2',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnail:{
        width: 79,
        height: 91,
        resizeMode: 'contain'
    },
    ItemDetail:{
        flex: 1,
        marginLeft: 20,
    },
    itemName:{
        fontSize: 17,
        fontFamily: 'Roboto-Medium',
    },
    itemDesc:{
        fontSize: 12,
        fontFamily: 'Roboto',
        color: '#828282'
    },
    itemBottom:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 30,
    },
    itemPrice:{
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        opacity: 0.9
    },
    operatorWrapper:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnOperator:{
        borderRadius: 3,
        backgroundColor: '#FF5353',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCount:{
        marginHorizontal: 15,
        fontFamily: 'Roboto',
        fontSize: 18
    },
    iconOperator:{
        color: '#FFFFFF',
        fontSize: 24
    },
    btnAdd:{
        borderRadius: 3,
        backgroundColor: '#FF5353',
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAdd:{
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium',
        fontSize: 14
    },
})
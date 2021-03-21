import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    content:{
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    rowBetween:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subTitle:{
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
        marginTop: 20,
        opacity: 0.8
    },
    btnCash:{
        backgroundColor: '#FF5353',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 3,
        justifyContent: 'center'
    },
    txtCash:{
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#ffffff',
        marginBottom: 1
    },
    inputItem:{
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 45,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        marginTop: 10,
        justifyContent: 'center'
    },
    inputText:{
        fontFamily: 'Roboto',
        fontSize: 17,
    },
    itemWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    thumbnailWrapper:{
        width: 55,
        height: 55,
        backgroundColor: '#F2F2F2',
        borderRadius: 3,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnailItem:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    detailItem:{
        marginLeft: 15,
        width: '45%'
    },
    itemName:{
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        opacity: 0.7
    },
    priceItem:{
        fontSize: 12,
        fontFamily: 'Roboto',
        color: '#828282'
    },
    itemRight:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        justifyContent: 'space-between',
        width: 100,
    },
    totalOrder:{
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#828282',
    },
    totalPricePerItem:{
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#828282'
    },
    orderSummary:{
        marginTop: 20
    },
    itemSummary:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 3
    },
    textItem:{
        fontFamily: 'Roboto',
        fontSize: 13,
        marginTop: 5
    },
    bottomView:{
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#E0E0E0'
    },
    btnPay:{
        borderRadius: 3,
        backgroundColor: '#FF5353',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    txtPay:{
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: '#ffffff'
    },
    txtDanger:{
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#FF5353',
        marginTop: 5
    }
})
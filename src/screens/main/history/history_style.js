import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    content:{
        paddingTop: 20,
    },
    imgHistory:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    itemWrapper:{
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    line:{
        borderTopWidth: 1,
        borderColor: '#BDBDBD',
        marginVertical: 15,
        marginHorizontal: 20
    },
    itemDetail:{
        marginLeft: 15,
        flex: 1
    },
    itemTitle:{
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#4F4F4F'
    },
    itemDate:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#4F4F4F'
    },
    itemTotal:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#4F4F4F'
    },
    itemTotalPrice:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#4F4F4F',
    },
    rowBetween:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3
    }
})
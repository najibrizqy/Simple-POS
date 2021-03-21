import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Icon, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { postTransaction } from 'actions/transactions';
import { Header, ShowToast } from 'components';
import { formatNumber } from 'helper';
import styles from './pay_style';

class PayScreen extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            listProducts: [],
            totalPrice: 0,
            cash: 0,
            change: 0,
            trigger: false
        }
    }

    componentDidMount = async () => {
        this._getProducts()
    }

    _getProducts = async () => {
        const getProducts = await AsyncStorage.getItem('products');
        const Products = JSON.parse(getProducts);
        let totalPrice = 0
        Products.map(x => {
            totalPrice += x.price * x.totalOrder
        })
        this.setState({
            listProducts: Products,
            totalPrice
        })
    }

    _onChangeCash = (number) => {
        const {totalPrice} = this.state
        let change = 0
        if(number > totalPrice){
            change = number - totalPrice
        }
        this.setState({
            cash: number,
            trigger: true,
            change
        })
    }

    _onFit = () => {
        this.setState({
            cash: this.state.totalPrice
        })
    }

    _onPay = async () => {
        const date = new Date()
        const {cash, totalPrice, listProducts} = this.state
        if(cash < totalPrice){
            ShowToast('Jumlah tunai tidak mencukupi', 'danger')
        }else{
            const data = {
                userId: this.props.users.dataUser.id,
                item: listProducts,
                created_at: date
            }
            this.props.dispatch(postTransaction(data))
            await AsyncStorage.removeItem('products')
                .then(() => {
                    ShowToast('Transaksi berhasil', 'success')
                    this.props.navigation.goBack()
                })
        }
    }

    render(){
        const {listProducts, totalPrice, cash, change, trigger} = this.state
        return(
            <Container>
                <Header navigation={this.props.navigation} title="Pembayaran" />
                <Content showsVerticalScrollIndicator={false} style={styles.content}>
                    <View style={styles.rowBetween}>
                        <Text style={[styles.subTitle, {marginTop: 0}]}>Jumlah Tunai</Text>
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnCash} onPress={this._onFit}>
                            <Text style={styles.txtCash}>Uang Pas</Text>
                        </TouchableOpacity>
                    </View>
                    <View regular style={styles.inputItem}>
                        <Input 
                            style={styles.inputText}
                            keyboardType='number-pad'
                            autoCapitalize={'none'}
                            autoCompleteType='off'
                            onChangeText={number => this._onChangeCash(number)}
                            value={cash !== 0 ? cash.toString() : ''}
                        />
                    </View>
                    {
                        trigger && cash < totalPrice &&
                            <Text style={styles.txtDanger}>Jumlah tunai tidak mencukupi</Text>
                    }

                    <Text style={styles.subTitle}>Daftar Pesanan</Text>
                    {
                        listProducts.map(item => {
                            return(
                                <View style={styles.itemWrapper} key={item.id}>
                                    <View style={styles.thumbnailWrapper}>
                                        <Image  source={item.img} style={styles.thumbnailItem} />
                                    </View>
                                    <View style={styles.detailItem}>
                                        <Text style={styles.itemName} numberOfLines={2} ellipsizeMode='tail'>{item.name}</Text>
                                        <Text style={styles.priceItem}>{formatNumber(item.price)}</Text>
                                    </View>
                                    <View style={styles.itemRight}>
                                        <Text style={styles.totalOrder}>{item.totalOrder}x</Text>
                                        <Text style={styles.totalPricePerItem}>{formatNumber(item.price * item.totalOrder)}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                    <View style={styles.orderSummary}>
                        <View style={styles.itemSummary}>
                            <Text style={styles.textItem}>Total ( {listProducts.length} item )</Text>
                            <Text style={styles.textItem}>{formatNumber(totalPrice)}</Text>
                        </View>
                        <View style={styles.itemSummary}>
                            <Text style={styles.textItem}>Tunai</Text>
                            <Text style={styles.textItem}>{formatNumber(cash)}</Text>
                        </View>
                        <View style={styles.itemSummary}>
                            <Text style={styles.textItem}>Kembalian</Text>
                            <Text style={styles.textItem}>{formatNumber(change)}</Text>
                        </View>
                    </View>
                </Content>
                <View style={styles.bottomView}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnPay} onPress={this._onPay}>
                        <Text style={styles.txtPay}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    return{
      users: state.users,
      transaction: state.transaction
    }
}

export default connect (mapStateToProps) (PayScreen)
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, Button } from 'react-native';
import { Container, Content, Icon, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { ProductCard } from 'components';
import { formatNumber } from 'helper';
import styles from './home_style';

class HomeScreen extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            productsStorage: [],
            listProducts: [],
            totalPrice: 0,
            amount: 0,
            drawerOpen: false,
            onSearch: false,
            keyword: '',
            firstLoad: true
        }
    }

    componentDidMount = () => {
        this.Subscription = this.props.navigation.addListener('focus',() => {
            this._getProductsStorage();
        });
    }

    componentWillUnmount = () => {
        this.Subscription()
    }

    _getProductsStorage = async () => {
        let {firstLoad} = this.state
        const getProducts = await AsyncStorage.getItem('products');
        const Products = JSON.parse(getProducts);
        let temp = []
        if(!Products){
            temp = []
            firstLoad = true
            this.setState({
                amount: 0,
                totalPrice: 0
            })
        }else{
            if(Products.length !== 0){
                let a = 0
                for(a in Products){
                    temp.push(Products[a])
                }
            }else{
                firstLoad = true
                this.setState({
                    amount: 0,
                    totalPrice: 0
                })
            }
        }

        if(firstLoad){
            this.setState({
                productsStorage: temp,
                listProducts: [],
            }, () => this._getListProducts())        
        }
    }

    _getListProducts = () => {
        const data = this.props.products.listProducts
        let newData = '';
        newData = data.map(item => {
            item.add = false
            item.totalOrder = 0
            return item
        })
        this.setState(previousState => ({
            listProducts:  [...previousState.listProducts, ...newData],
            firstLoad: false,
            loading: false,
        }))
    }

    _add = (data) => {
        const {listProducts, amount} = this.state
        const changeValue = listProducts.map(item => {
            if (item.id === data.id) {
                item.add = true;
            }
            return item
        })
        this.setState({
            listProducts: changeValue,
            amount: amount + 1,
        }, () => this._plusTapped(data))
    }

    _plusTapped = (data) => {
        const {totalPrice, listProducts} = this.state
        const changeValue = listProducts.map(item => {
            if (item.id === data.id) {
                item.totalOrder = item.totalOrder + 1;
            }
            return item
        })
        this.setState({
            totalPrice: totalPrice + data.price,
            listProducts: changeValue
        }, () => this._insertToStorage())
    }

    _minusTapped = (data) => {
        const {amount, totalPrice, listProducts} = this.state
        const changeValue = listProducts.map(item => {
            if (item.id === data.id) {
                if(item.totalOrder === 1){
                    item.add = false
                }
                item.totalOrder = item.totalOrder - 1
            }
            return item
        })
        this.setState({
            amount: data.totalOrder === 0 ? amount - 1: amount,
            totalPrice: totalPrice - data.price,
            listProducts: changeValue
        }, () => this._insertToStorage())
    }

    _insertToStorage = async () => {
        const {listProducts} = this.state
        let dataProducts = []
        let a = 0
        for(a in listProducts){
            if(listProducts[a].totalOrder >= 0){
                dataProducts.push(listProducts[a])
            }
        }

        const getProducts = await AsyncStorage.getItem('products');
        let Products = JSON.parse(getProducts);
        if( !Products ){
            Products = []
            let j = 0
            for(j in dataProducts){
                Products.push(dataProducts[j])
            }
        }else{
            if(Products.length !== 0){
                Products.map(item => {
                    dataProducts.map(res =>{
                        if(item.id === res.id){
                            item.totalOrder = res.totalOrder
                        }
                    })
                    return item
                })

                let newArray = Products.concat(dataProducts)
                Products = this._getUnique(newArray, 'id');
            }else{
                let j = 0
                for(j in dataProducts){
                    Products.push(dataProducts[j])
                }
            }
        }

        Products = Products.filter(x => x.totalOrder > 0)

        await AsyncStorage.setItem('products', JSON.stringify(Products) )
            .then(() => {
                this.setState({
                    productsStorage: Products
                })
            })
            .catch(err => {
                ShowToast(err, 'danger')
            }) 
    }

    _getUnique = (arr, id) => {
        return arr.map(e => e[id])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e]);
    }

    _onSearch = () => {
        const {onSearch, keyword} = this.state
        this.setState({
            onSearch: !onSearch,
            keyword: onSearch ? null : keyword,
            listProducts: onSearch ? this.props.products.listProducts : this.state.listProducts
        })
    }

    _onChangeSearch = (text) => {
        let searchText = text.trim().toLowerCase();
        let data = this.props.products.listProducts.filter(l => {
            return l.name.toLowerCase().match( searchText );
           });

        this.setState({
            keyword: text,
            listProducts: data
        })
    }

    _onSubmitSearch = () => {

    }

    render(){
        const {listProducts, totalPrice, amount, onSearch} = this.state
        return(
            <Container>
                <StatusBar barStyle="light-content" backgroundColor="#FF5353" />
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btnMenu} onPress={() => this.props.navigation.openDrawer()}>
                        <Icon type="SimpleLineIcons" name="menu" style={styles.iconMenu} />
                    </TouchableOpacity>
                    {
                        onSearch ? 
                            <Item regular style={styles.input}>
                                <Input 
                                    style={styles.txtInput} 
                                    placeholder='Cari makanan atau minuman' 
                                    placeholderTextColor="#BDBDBD" 
                                    onChangeText={(text) => this._onChangeSearch(text)} 
                                    autoFocus 
                                    returnKeyType="search"
                                    onSubmitEditing={this._onSubmitSearch}
                                />
                                <TouchableOpacity activeOpacity={0.5} onPress={this._onSubmitSearch}>
                                    <Icon type="MaterialIcons" name="search" style={styles.iconSearchInput} />
                                </TouchableOpacity>
                            </Item>
                        :
                            <View style={styles.titleWrapper}>
                                <Text style={styles.headerTitle}>Simple POS</Text>
                            </View>
                    }
                    <TouchableOpacity activeOpacity={0.7} style={styles.btnSearch} onPress={this._onSearch}>
                        {
                            onSearch ? 
                                <Icon type="MaterialIcons" name="close" style={styles.iconClose} />
                            :
                                <Icon type="MaterialIcons" name="search" style={styles.iconSearch} />
                        }
                    </TouchableOpacity>
                </View>
                <Content showsVerticalScrollIndicator={false} style={styles.content}>
                    {
                        listProducts.map((item, index) => {
                            return(
                                <ProductCard 
                                    data={item} 
                                    key={index} 
                                    totalProduct={listProducts.length} 
                                    index={index} 
                                    onAdd={this._add} 
                                    onPlus={this._plusTapped} 
                                    onMinus={this._minusTapped} 
                                />
                            )
                        })
                    }
                </Content>
                {
                    amount !== 0 &&
                        <View style={styles.bottomView}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.btnBottom} onPress={() => this.props.navigation.navigate('Pay')}>
                                <View style={styles.itemBasketWrapper}>
                                    <Text style={styles.totalItem} allowFontScaling={false} numberOfLines={1} ellipsizeMode="tail">Pay {amount} item</Text>
                                </View>
                                <Text style={styles.textTotalPrice} allowFontScaling={false}>Rp. {formatNumber(totalPrice)}</Text>
                            </TouchableOpacity>
                        </View>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products,
    }
}

export default connect (mapStateToProps) (HomeScreen)



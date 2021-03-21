import React, {useState, useEffect} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import moment from 'moment';

import img from 'images';
import { Header } from 'components';
import { formatNumber } from 'helper';
import styles from './history_style';

const HistoryScreen = (props) => {

    const [empty, setEmpty] = useState(false)
    const [listHistory, setListHistory] = useState([])

    useEffect(() => {
        const foundItem = props.transactions.listTransaction.filter(item => {
            return props.users.dataUser.id.toLowerCase() == item.userId.toLowerCase()
        })

        if ( foundItem.length == 0 ) {
            setEmpty(true)
        }else{
            setEmpty(false)
            setListHistory(foundItem)
        }
    }, [props.transactions.listTransaction])

    return(
        <Container>
            <Header navigation={props.navigation} title="Riwayat Transaksi" />
            <Content showsVerticalScrollIndicator={false} style={styles.content}>
                {
                    !empty && 
                        listHistory.map((item, index) => {
                            let totalPrice = 0
                            item.item.map(x => {
                                totalPrice += x.price * x.totalOrder
                            })
                            return(
                                <>
                                    <TouchableOpacity activeOpacity={0.7} style={styles.itemWrapper} key={index}>
                                        <Image source={img.History} style={styles.imgHistory} />
                                        <View style={styles.itemDetail}>
                                            <View style={styles.rowBetween}>
                                                <Text style={styles.itemTitle}>Makanan</Text>
                                                <Text style={styles.itemDate}>{moment(item.created_at).format('DD MMMM YYYY')}</Text>
                                            </View>
                                            <View style={styles.rowBetween}>
                                                <Text style={styles.itemTotalPrice}>Rp. {formatNumber(totalPrice)}</Text>
                                                <Text style={styles.itemTotal}>{item.item.length} item</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.line} />
                                </>
                            )
                        })
                }
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
      users: state.users,
      transactions: state.transactions
    }
}

export default connect (mapStateToProps) (HistoryScreen)
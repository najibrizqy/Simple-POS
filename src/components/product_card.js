import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import { formatNumber } from 'helper';
import styles from './styles';

const ProductCard = (props) => {
    return(
        <View style={props.totalProduct === props.index + 1 ? [styles.itemWrapper, {marginBottom: 20}] : styles.itemWrapper}>
            <View style={styles.thumbnailWrapper}>
                <Image source={props.data.img} style={styles.thumbnail}/>
            </View>
            <View style={styles.ItemDetail}>
                <Text style={styles.itemName} numberOfLines={2} ellipsizeMode='tail' allowFontScaling={false}>{props.data.name}</Text>
                <View style={styles.itemBottom}>
                    <View>
                        <Text style={styles.itemPrice}>Rp. {formatNumber(props.data.price)}</Text>
                    </View>
                    {
                        props.data.add === false ?
                            <TouchableOpacity activeOpacity={0.7} style={styles.btnAdd} onPress={() => props.onAdd(props.data)} >
                                <Text style={styles.textAdd}>Add</Text>
                            </TouchableOpacity>
                        :
                            <View style={styles.operatorWrapper}>
                                <TouchableOpacity activeOpacity={0.7} style={styles.btnOperator} onPress={() => props.onMinus(props.data)}>
                                    <Icon type="MaterialCommunityIcons" name="minus" style={styles.iconOperator} />
                                </TouchableOpacity>
                                <Text style={styles.textCount}>{props.data.totalOrder}</Text>
                                <TouchableOpacity activeOpacity={0.7} style={styles.btnOperator} onPress={() => props.onPlus(props.data)}>
                                    <Icon type="MaterialIcons" name="add" style={styles.iconOperator} />
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        </View>
    )
}

export default ProductCard


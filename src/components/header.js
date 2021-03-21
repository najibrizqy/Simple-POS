import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, Button } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

const Header = (props) => {
    return(
        <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.5} style={styles.btnBack} onPress={() => props.navigation.goBack()}>
                <Icon type="AntDesign" name="left" style={styles.iconBack} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

export default Header;
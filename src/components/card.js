import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './card.style';

const Card = ({datas}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: datas.imgURL}} style={styles.image}/>
            <Text>{datas.title}</Text>
            <Text>{datas.price}</Text>
        </View>
    );
};

export default Card;
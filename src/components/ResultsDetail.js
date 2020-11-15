import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultsDetail = ({result}) => {
    return (
    <View style={styles.container}>
        {result.image_url !=''
        ? <Image source={{uri: result.image_url}} style={styles.image}/> 
        : <Image source={{uri: 'https://cdn2.iconfinder.com/data/icons/travel-181/64/17-travel-512.png'}} style={styles.image}/>
        }
        <Text style={styles.name}>{result.name}</Text>
    <Text style={styles.name}>{result.rating} Estrellas, {result.review_count} Comentarios</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,  
        marginBottom:5,      
    },
    name:{
        fontWeight: "bold",
    },
});

export default ResultsDetail;

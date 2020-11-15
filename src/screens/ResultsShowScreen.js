import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, Image } from 'react-native'

import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.image} />
                }}
            />
            <ScrollView>
            <Text style={styles.info}>Direccion: {result.location.address1},{result.location.city},{result.location.country}</Text>
            {result.display_phone===''? null: <Text style={styles.info}>Telefono:  {result.display_phone}</Text> }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginBottom: 5,
    },
    name: {
        height: 50,
       justifyContent: "center",
       alignItems: "center",
        textAlign: "center",
        alignSelf: "stretch",
        fontFamily: 'Times New Roman',
        borderBottomColor: 4,
        borderColor: '#DAF7A6',
        backgroundColor: '#A2EF18',
        margin: 15,
        fontSize: 18,
        fontWeight: "bold",
    }, 
    container:{
        alignItems: "center",
    },
    info:{
        marginBottom: 5,
        fontSize: 18,
    },

});

export default ResultsShowScreen;

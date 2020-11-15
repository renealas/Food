import React, {useState} from 'react';
import { ScrollView,View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');    
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
    <>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text>:null}
        <ScrollView>
        <ResultList 
        results={filterResultsByPrice('$')} 
        title="Andamos en la Calle" 
        />
        <ResultList 
        results={filterResultsByPrice('$$')} 
        title="Salida Normal" 
        />
        <ResultList 
        results={filterResultsByPrice('$$$')} 
        title="Estamos en Quince?" 
        />
        <ResultList 
        results={filterResultsByPrice('$$$$')} 
        title="Quien se Murio y te dejo Pisto?" 
        />
        </ScrollView>
    </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;

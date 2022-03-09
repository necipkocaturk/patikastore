import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TextInput } from "react-native";
import store_data from './components/store.json';
import styles from './components/card.style';
import Card from './components/card';

function App() {
    return(
        <SafeAreaView>
            <Text style={styles.text_style}> PATİKASTORE </Text>
            <View style={styles.ara_view_style}>
                <View>
                    <TextInput style={styles.ara_style}
                placeholder="Ara.." />
                </View>
                <FlatList
                numColumns={2}
                data={store_data}
                renderItem={({item}) => <Card datas={item}/>}
                  />
            </View>

        </SafeAreaView>

    );
}

export default App;
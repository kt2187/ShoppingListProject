import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//import { uuid } from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
    const [items, setItems] = useState([
        {
            id: Math.floor(Math.random() * 100) + 1,
            text: 'Milk',
        },
        {
            id: Math.floor(Math.random() * 100) + 1,
            text: 'Eggs',
        },
        {
            id: Math.floor(Math.random() * 100) + 1,
            text: 'Bread',
        },
        {
            id: Math.floor(Math.random() * 100) + 1,
            text: 'Juice',
        },
    ]);

    return (
        <View style={styles.container}>
            <Header title="Shopping List" />
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ListItem
                        item={item}

                    />
                )} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
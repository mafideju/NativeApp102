import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';


const HomeScreen = () => {
    const datas = useContext(BlogContext);
    return (
        <View>
            <Text>Houme</Text>
            <FlatList
                data={datas}
                keyExtractor={data => data.title}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({})

export default HomeScreen;

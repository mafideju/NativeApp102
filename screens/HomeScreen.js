import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../utils/COLORS';


const HomeScreen = ({ navigation }) => {
    const { state, removePost } = useContext(Context);
    return (
        <View style={styles.container}>
            {/* <Button
                title="Novo"
                onPress={addPost}
            /> */}
            <FlatList
                data={state}
                keyExtractor={state => state.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Post', { postId: item.id })}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableHighlight onPress={() => removePost(item.id)}>
                                <Feather name='trash' size={18} />
                            </TouchableHighlight>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => navigation.navigate('Novo')}>
                <Feather name='plus' size={30} color={COLORS.white1} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
});

export default HomeScreen;

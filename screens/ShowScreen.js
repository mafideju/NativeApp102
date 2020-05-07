import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { COLORS } from '../utils/COLORS';
import { FontAwesome } from '@expo/vector-icons'

const ShowScreen = ({
    navigation
}) => {
    const postId = navigation.getParam('postId');
    const { state } = useContext(Context);
    const post = state.find(post => post.id === postId);

    return (
        <View>
            <Text>{post.title}</Text>
            <Text>{post.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({
    navigation
}) => {
    const postId = navigation.getParam('postId');
    return {
        headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => navigation.navigate('Editar', { postId })}>
                <FontAwesome name='pencil-square-o' size={30} color={COLORS.white1} />
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({});

export default ShowScreen;

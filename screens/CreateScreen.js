import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { COLORS } from '../utils/COLORS';
import PostForm from '../components/PostForm';


const CreateScreen = ({
    navigation
}) => {
    const { addPost } = useContext(Context);

    return (
        <PostForm
            onSubmit={(title, content) => {
                addPost(title, content, () => navigation.navigate('Home'));
            }}
        />
    )
}

const styles = StyleSheet.create({});

export default CreateScreen;

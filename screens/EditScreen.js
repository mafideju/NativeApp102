import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { COLORS } from '../utils/COLORS';
import { Context } from '../context/BlogContext';
import PostForm from '../components/PostForm';


const EditScreen = ({
    navigation
}) => {
    const { state, editPost } = useContext(Context);
    const id = navigation.getParam('postId');
    const post = state.find(post => post.id === id);

    return (
        <PostForm
            initialValues={{ title: post.title, content: post.content }}
            onSubmit={(title, content) => editPost(id, title, content, () => navigation.pop())}
        />
    );
};


const styles = StyleSheet.create({});

export default EditScreen;
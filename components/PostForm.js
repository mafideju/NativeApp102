import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { COLORS } from '../utils/COLORS';

const PostForm = ({
    onSubmit,
    initialValues
}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder='Titulo'
                value={title}
                onChangeText={val => setTitle(val)}
            />
            <TextInput
                style={styles.input}
                multiline = {true}
                numberOfLines = {10}
                placeholder='Mensagem'
                value={content}
                onChangeText={val => setContent(val)}
            />
            <Button
                color={COLORS.black2}
                title='Salvar'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

PostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black1,
        backgroundColor: COLORS.white3,
        color: COLORS.black2
    }
});

export default PostForm;
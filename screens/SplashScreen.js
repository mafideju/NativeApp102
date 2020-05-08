import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native'

const SplashScreen = ({
    navigation
}) => {
    return (
        <View>
            <Text>Olá Amanda, Seja Bem Vinda!</Text>
            <TouchableHighlight>
                <Button title='Minhas Notas' onPress={() => navigation.navigate('Home')} />
            </TouchableHighlight>
        </View>
    );
};


const styles = StyleSheet.create({});

export default SplashScreen;
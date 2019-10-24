import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Este é o texto original!!!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Muda !" onPress={() => setOutputText('Texto Alterado com Sucesso')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFFF33',
    fontSize: 20,
    fontWeight: 'bold',
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

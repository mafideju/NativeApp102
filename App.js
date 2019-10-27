import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const App = () => {
  const [outputText, setOutputText] = useState('06969 => Este é o texto original!!!')
  return (
    <View style={styles.container}>
      <Text
        style={styles.textOne}
      >
        {outputText}
      </Text>
      <Button
        style={styles.buttonOne}
        title="Muda !"
        onPress={() => setOutputText('WOW Texto Alterado com Sucesso !!!')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textOne: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30
  },
  buttonOne: {
    width: 100,
    color: 'black',
    backgroundColor: 'white'
  }
})

export default App

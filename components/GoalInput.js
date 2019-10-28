import React from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Button
} from 'react-native'

const GoalInput = ({ inputChangeHandler, addGoalHandler, enteredGoal }) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Compras do Dia"
        onChangeText={inputChangeHandler}
        value={enteredGoal}
      />
      <Button
        title=" + "
        onPress={addGoalHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '80%'
  }
})

export default GoalInput

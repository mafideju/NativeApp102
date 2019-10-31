import React from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Modal,
  Button
} from 'react-native'
import PropTypes from 'prop-types'

const GoalInput = ({
  inputChangeHandler,
  addGoalHandler,
  cancelGoalHandler,
  enteredGoal,
  visible
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Compras do Dia"
          onChangeText={inputChangeHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <Button
            title=" CANCELAR "
            color="red"
            style={styles.buttonIt}
            onPress={cancelGoalHandler}
          />
          <Button
            title=" NOVA TAREFA "
            color="green"
            style={styles.buttonIt}
            onPress={addGoalHandler}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '80%'
  }
})

GoalInput.propTypes = {
  inputChangeHandler: PropTypes.func,
  addGoalHandler: PropTypes.func,
  cancelGoalHandler: PropTypes.func,
  enteredGoal: PropTypes.string,
  visible: PropTypes.bool
}

export default GoalInput

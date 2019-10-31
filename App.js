import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const [addMode, setAddMode] = useState(false)

  const inputChangeHandler = text => setEnteredGoal(text)
  const addGoalHandler = () => {
    setCourseGoals(goals => [...goals, {
      id: Math.random().toString(),
      value: enteredGoal
    }])
    // console.log(enteredGoal)
    setAddMode(false)
    setEnteredGoal('')
  }
  const cancelGoalHandler = () => setAddMode(false)
  const deleteGoalHandler = id => {
    setCourseGoals(goals => {
      return goals.filter(goal => goal.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Button
        title="Nova Tarefa"
        onPress={() => setAddMode(true)}
      />
      <GoalInput
        visible={addMode}
        inputChangeHandler={inputChangeHandler}
        addGoalHandler={addGoalHandler}
        cancelGoalHandler={cancelGoalHandler}
        enteredGoal={enteredGoal}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals}
        renderItem={item => (
          <GoalItem
            id={item.item.id}
            goal={item.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '80%'
  },
  outputList: {
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
})

export default App

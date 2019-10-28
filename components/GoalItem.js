import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'

const GoalItem = ({ goal, onDelete, id }) => {
  return (
    <View>
      <TouchableOpacity onPress={ onDelete.bind(this, id) }>
        <Text style={styles.outputList}>
          {goal}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  outputList: {
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
})

export default GoalItem

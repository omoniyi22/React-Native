import React, { useState } from 'react'
import {
  Text, View, TextInput,
  StyleSheet, Button,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoaInput'



export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const [error, setError] = useState("")

  const removeGoalHandler = goalId => {

    console.log("TO BE DELETED", goalId)
    console.log(courseGoals)
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const addGoalHandler = (currentGoal) => {
    if (currentGoal.length === 0) {
      setError("Pls fill in input field")
    }else{

    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: currentGoal }])
    setIsAddMode(false)
    }
  }


  const cancelGoalHandler = goalId => {
    setIsAddMode(false)
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} visible={isAddMode} error={error} />

      <FlatList
        keyExtractor={(item, idex) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />
        )}
      >
      </FlatList>
    </View >
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    padding: 10
  },

})
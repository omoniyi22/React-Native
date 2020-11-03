import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native'

const GoalItem = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalhandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType="slide" animated={true}>
      <View><Text>{props.error}</Text></View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.buttonContainer} >
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalhandler} />
          </View>
        </View>
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "68%"
  },
  button: {
    width: "40%"
  }
})

export default GoalItem
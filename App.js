import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import ImageOption from './src/components/ImageOption/ImageOption'
import Button from './src/components/Button/Button'
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion'
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion'
// import questions from './assets/data/imageMulatipleChoiceQuestions'
import questions from './assets/data/openEndedQuestions'


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('You won')
      setCurrentQuestionIndex(0)
    } else {
      setCurrentQuestion(questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex])

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const onWrong = () => {
    Alert.alert('Incorrect')
  }


  return (
    <View style={styles.root}>
      {/* <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      /> */}
      <OpenEndedQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    paddingTop: 50
  }
})

export default App
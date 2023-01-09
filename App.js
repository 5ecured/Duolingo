import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import ImageOption from './src/components/ImageOption/ImageOption'
import Button from './src/components/Button/Button'
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion'
import questions from './assets/data/imageMulatipleChoiceQuestions'


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



  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestion question={currentQuestion} />
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
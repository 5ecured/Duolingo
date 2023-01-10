import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion'
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion'
import Header from './src/components/Header/Header'
import questions from './assets/data/allQuestions'


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
      <Header progress={currentQuestionIndex / questions.length} />

      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === 'OPEN_ENDED' && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
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
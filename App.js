import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion'
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion'
import Header from './src/components/Header/Header'
import questions from './assets/data/allQuestions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FillInTheBlank from './src/components/FillInTheBlank/FillInTheBlank'


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])
  const [lives, setLives] = useState(5)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('You won')
      setCurrentQuestionIndex(0)
    } else {
      setCurrentQuestion(questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex])

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (hasLoaded) {
      saveData()
    }
  }, [currentQuestionIndex, lives, hasLoaded])

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const restart = () => {
    setLives(5)
    setCurrentQuestionIndex(0)
  }

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert('Game over', 'Try again', [
        {
          text: 'Restart game',
          onPress: restart
        }
      ])
    } else if (lives === 2) {
      Alert.alert('Incorrect', 'Careful, you only have 1 life left')
      setLives(lives - 1)
    } else {
      Alert.alert('Incorrect')
      setLives(lives - 1)
    }
  }

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('lives', JSON.stringify(lives))
      await AsyncStorage.setItem('currentQuestionIndex', JSON.stringify(currentQuestionIndex))
    } catch (error) {
      console.log(error);
    }
  }

  const loadData = async () => {
    try {
      const loadedLives = await AsyncStorage.getItem('lives')
      if (loadedLives) {
        setLives(JSON.parse(loadedLives))
      }

      const currentQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex')
      if (currentQuestionIndex) {
        setCurrentQuestionIndex(JSON.parse(currentQuestionIndex))
      }
    } catch (error) {
      console.log(error);
    }

    setHasLoaded(true)
  }

  if (!hasLoaded) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
        restart={restart}
        currentQuestion={currentQuestionIndex}
        totalQuestions={questions.length}
      />

      {currentQuestion.type === 'FILL_IN_THE_BLANK' && (
        <FillInTheBlank
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

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
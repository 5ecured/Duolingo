import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ImageOption from './src/components/ImageOption/ImageOption'
import Button from './src/components/Button/Button'
import question from './assets/data/oneQuestionWithOption'


const App = () => {
  const [selected, setSelected] = useState(null)

  const onButtonPress = () => {
    console.warn('pressed')
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map(option => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <Button text='Check' onPress={onButtonPress} disabled={!selected} />
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch'
  },
  optionsContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    //because we have flexWrap, we hvae to use alignContent for the vertical gap between options
    alignContent: 'space-between'
  },
})

export default App
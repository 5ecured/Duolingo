import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ImageOption from './src/components/ImageOption/ImageOption'


const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>

      <View style={styles.optionsContainer}>
        <ImageOption />
        <ImageOption />
        <ImageOption />
        <ImageOption />
      </View>

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
import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>

      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image
            source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }}
            style={styles.optionImage}
            resizeMode='contain'
          />
          <Text style={styles.optionText}>Glass</Text>
        </View>


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
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: 'lightgrey',
    borderRadius: 10,
    width: '48%',
    height: '48%',
    alignItems: 'center',
    padding: 10
  },
  optionImage: {
    width: '100%',
    flex: 1,
  },
  optionText: {

  }
})

export default App
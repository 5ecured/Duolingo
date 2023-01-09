import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ImageOption from '../ImageOption/ImageOption'
import Button from '../Button/Button'
import styles from './styles'

const ImageMultipleChoiceQuestion = ({ question }) => {
    const [selected, setSelected] = useState(null)


    const onButtonPress = () => {
        if (selected.correct) {
            // Alert.alert('Correct!')
            // setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSelected(null)
        } else {
            Alert.alert('Incorrect!')
        }
    }

    return (
        <>
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
        </>
    )
}

export default ImageMultipleChoiceQuestion
import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import mascot from '../../../assets/images/mascot.png'
import Button from '../Button/Button'

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
    const [input, setInput] = useState('')

    const onButtonPress = () => {
        if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
            onCorrect()
        } else {
            onWrong()
        }
        setInput('')
    }

    return (
        <>
            <Text style={styles.title}>Translate this sentence</Text>

            <View style={styles.row}>
                <Image
                    source={mascot}
                    style={styles.mascot}
                    resizeMode='contain'
                />
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>
            </View>

            <TextInput
                value={input}
                placeholder='Your answer here'
                style={styles.textInput}
                onChangeText={setInput}
                textAlignVertical='top' //for android
                multiline={true} //for ios
            />

            <Button text='Check' onPress={onButtonPress} disabled={false} />
        </>
    )
}

export default OpenEndedQuestion
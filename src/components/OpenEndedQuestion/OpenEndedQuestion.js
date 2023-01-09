import { View, Text, TextInput, Image, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
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

    if (Platform.OS === 'ios') {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.fullContainer}>
                <KeyboardAvoidingView behavior='padding' style={styles.fullContainer}>
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

                    <Button text='Check' onPress={onButtonPress} disabled={input === ''} />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    } else {
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

                <Button text='Check' onPress={onButtonPress} disabled={input === ''} />
            </>
        )
    }
}

export default OpenEndedQuestion
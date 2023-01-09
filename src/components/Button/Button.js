import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const Button = ({ text, onPress, disabled }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, disabled ? styles.disabledContainer : {}]}
            disabled={disabled}
        >
            <View style={{ borderColor: 'white', borderBottomWidth: 1.5 }}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default Button
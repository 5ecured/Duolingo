import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'


const ImageOption = ({ image, text, isSelected, onPress }) => {
    return (
        <Pressable
            style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}
            onPress={onPress}
        >
            <Image
                source={{ uri: image }}
                style={styles.optionImage}
                resizeMode='contain'
            />
            <Text style={isSelected ? styles.selectedText : styles.optionText}>{text}</Text>
        </Pressable>
    )
}

export default ImageOption
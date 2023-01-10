import { View, Image, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ProgressBar from '../ProgressBar/ProgressBar'
import heart from '../../../assets/images/heart.png'

const Header = ({ progress, lives }) => {
    return (
        <View style={styles.root}>
            <ProgressBar progress={progress} />
            <Image source={heart} style={styles.icon} resizeMode='contain' />
            <Text style={styles.lives}>{lives}</Text>
        </View>
    )
}

export default Header
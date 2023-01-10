import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ProgressBar from '../ProgressBar/ProgressBar'

const Header = ({ progress }) => {
    return (
        <View style={styles.root}>
            <ProgressBar progress={progress} />
        </View>
    )
}

export default Header
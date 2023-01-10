import { View, Image, Text, Button, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import ProgressBar from '../ProgressBar/ProgressBar'
import heart from '../../../assets/images/heart.png'

const Header = ({ progress, lives, restart }) => {
    return (
        <View style={styles.root}>
            <ProgressBar progress={progress} />
            <Image source={heart} style={styles.icon} resizeMode='contain' />
            <Text style={styles.lives}>{lives}</Text>
            <Button title='Restart' onPress={() => {
                Alert.alert('Are you sure you want to restart the game?', '', [
                    {
                        text: 'Restart',
                        onPress: restart
                    },
                    {
                        text: 'Cancel',
                    }
                ])
            }
            } />
        </View>
    )
}

export default Header
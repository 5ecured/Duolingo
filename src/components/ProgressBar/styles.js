import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'lightgrey',
        height: 20,
        flex: 1,
        borderRadius: 15 //to make it fully round, set borderRadius to half of height
    },
    fg: {
        flex: 1,
        backgroundColor: '#FAC800',
        borderRadius: 15
    },
    highlight: {
        backgroundColor: '#FAD131',
        width: '90%',
        height: 5,
        borderRadius: 5,
        marginTop: 5,
        alignSelf: 'center'
    }
})

export default styles
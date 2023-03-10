import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 10,
        marginBottom: 0
    },
    mascot: {
        width: '30%',
        aspectRatio: 3 / 4,
        marginRight: 10
    },
    sentenceContainer: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        padding: 10
    },
    sentence: {
        fontSize: 18
    },
    textInput: {
        backgroundColor: '#ebebeb',
        alignSelf: 'stretch',
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
    },
    fullContainer: {
        width: '100%',
        height: '100%'
    }
})

export default styles
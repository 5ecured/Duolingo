import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginVertical: 10,
        height: 80
    },
    blank: {
        borderBottomWidth: 2,
        borderColor: 'lightgrey',
        width: 100
    },
    optionsContainer: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text: {
        alignSelf: 'flex-end',
        fontSize: 18
    }
})

export default styles
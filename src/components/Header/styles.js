import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        height: 30,
        width: 30,
        marginHorizontal: 10
    },
    lives: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    question: {
        marginRight: 15,
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default styles
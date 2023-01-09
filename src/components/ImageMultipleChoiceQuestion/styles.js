import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'stretch'
    },
    optionsContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        //because we have flexWrap, we hvae to use alignContent for the vertical gap between options
        alignContent: 'space-between'
    },
})

export default styles
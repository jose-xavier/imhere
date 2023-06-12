import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        gap: 16,
        marginTop: 8
        
    },
    name: {
        flex: 1,
        height: 56,
        color: '#FFF',
        fontSize: 16,
        padding: 16,

        
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: 'red',
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 36
    }
})
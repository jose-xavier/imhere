import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#131016'
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    enventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        fontSize: 16,
        color: '#FFF'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: 'green',

        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        marginTop: 36,
        flexDirection: 'row',
        gap: 12,
        marginBottom: 48
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: "center"
    }
})
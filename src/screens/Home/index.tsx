import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.enventDate}>
                Domingo, 11 de junho de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor={'#6B6B6B'}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>   
            </View>

            <Participant />
            <Participant />
            <Participant />
        </View>

    )
}
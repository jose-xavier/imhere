import { View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
    const participants = ['Netto', 'Sabrina','Vitória', 'Luan', 'Michele', 'Douglas']

    function handleRemoveParticipant(name: string) {
        console.log(`The participant ${name} has been removed`)
    }

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

            <FlatList  
                data={participants}
                keyExtractor={ item => item}
                renderItem={({ item }) => (
                    <Participant 
                        name={item} 
                        key={item} 
                        onRemove={() => handleRemoveParticipant("Netto")}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista presença.
                    </Text>
                )}
            />
        </View>

    )
}
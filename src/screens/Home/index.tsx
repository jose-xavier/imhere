import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
    const [ participants, setParticipants ] = useState<string[]>([])
    const [ participantName, setParticipantName ] = useState('')

    function handleInsertParticipant() {
        if(!participantName.trim()) {
            return Alert.alert("Erro", "Digite um nome")
        }

        const participantNameLowerCase = participantName.toLowerCase()


        if(participants.some( name => name.toLocaleLowerCase() === participantNameLowerCase )) {
            return Alert.alert("Participante existe", `Já existe um participante na lista com esse nome`)
        }

        setParticipants( prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleRemoveParticipant(name: string) {
    return Alert.alert("Remover participante", `Tem certeza que deseja remover o participante ${name} da lista?`, [
        {
            text: 'sim',
            onPress: () => setParticipants( prevState => prevState.filter(participant => participant !== name))
        },
        {
            text: 'não',
            style: 'cancel'
        }
    ]
    
    )
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
                    onChangeText={ e => setParticipantName(e)}
                    value={participantName}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleInsertParticipant}   
                >
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
                        onRemove={() => handleRemoveParticipant(item)}
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
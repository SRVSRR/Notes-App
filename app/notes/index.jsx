import { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const NoteScreen = () => {
    const [notes,setNotes] = useState([
        { id: 1, text: "First note" },
        { id: 2, text: "Second note" },
        { id: 3, text: "Third note" },
        { id: 4, text: "Fourth note" },
        { id: 5, text: "Fifth note" },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState("");

    return (<View style={styles.container}>
        <FlatList data={notes} keyExtractor={(item)=>item.id} renderItem={({item})=> (
            <View style={styles.noteItem}>
                <Text style={styles.noteText}>{item.text}</Text>
            </View>
        )}/> 
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.addButtonText}>+ Add Note</Text> 
        </TouchableOpacity>
        {/*Modal*/}
        <Modal visible={modalVisible} animationType="slide" transparent onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}> 
                    <Text style={styles.modalTitle}>Add a new note</Text>
                    <TextInput style={styles.input} placeholder="Enter note" placeholderTextColor='#aaa' value={newNote} onChangeText={setNewNote}/>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.SaveButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelSaveText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    noteItem: {
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
    },
    noteText: {
        fontSize: 18,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        left: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
});

export default NoteScreen;
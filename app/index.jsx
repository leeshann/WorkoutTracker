import { Text, View, StyleSheet, Modal, Button, TouchableOpacity, Touchable, ScrollView, TextInput } from "react-native";
// import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react'
import AddWorkoutButton from './components/addWorkoutButton'
import Header from './components/Header'
import Card from './components/Card'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [dropdownVisible, setDropDownVisible] = useState(false)
  const [cardList, setCardList] = useState(['Chest', 'Back', 'Arms', 'Legs', 'Glutes', 'Shoulders'])
  const [inputText, setInputText] = useState("")

  console.log(inputText)

  function handleAdd() {
    // check if array already contains card with the same name, if it does, don't update state. if it doesnt, add it
    setCardList((prev) => [...prev, inputText])
    setModalVisible((prev) => !prev)
    setInputText("")
  }
  return (
      <View style={styles.container}> 
        <Header title="My Workout" date="Friday, Feb 14" isChildPage={false}/>

        <ScrollView 
          contentContainerStyle={styles.cardContainer} 
          style={styles.cardContainerBackground}
        >
          {cardList.map((muscle, index) => (<Card key={muscle + index} title={muscle}/>))}
        </ScrollView>

        <View style={styles.footer}>
          <AddWorkoutButton 
            onPress={() => setModalVisible((prev) => !prev)}
          />
        </View>

        <Modal 
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible((prev) => !prev)
            }}>
           <View style={modalVisible ? styles.modalBackDrop : null}>
              <View style={styles.modalView}>
                <View style={styles.headerAndXButtonContainer}>
                  <Text style={styles.h1}>Add Workout</Text>
                  <TouchableOpacity 
                    style={styles.xButtonContainer} 
                    onPress={() => setModalVisible((prev) => !prev)}
                  >
                    <Text>x</Text>
                  </TouchableOpacity>
                </View>
                <TextInput 
                  style={styles.inputStyle}
                  placeholder="Enter workout name"
                  value={inputText}
                  onChangeText={(text) => setInputText(text)}/>
                <TouchableOpacity 
                  style={styles.addButton} 
                  onPress={handleAdd}
                >
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>

      </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
    border: '1px solid #E3E8F1',
    borderRadius: 10
  },
  modalBackDrop: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: 20,
    padding: 30,
    gap: 30,
    marginTop: 200,
    marginLeft: '10%',
    marginRight: '10%',
  },
  headerAndXButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  xButtonContainer: {
    backgroundColor: '#FFE4E6',
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderColor: '#FFCCD5',
    borderRadius: 10
  },
  addButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#FF8B9C',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 20,
  },
  cardContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  cardContainerBackground: {
    backgroundColor: '#FAF9F6',
    width: '100%'
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
    width: '100%',
    height: 'fit-content',
    padding: 8,
  },
  formSectionHeader: {
    color: '#666666'
  }
})
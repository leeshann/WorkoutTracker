import { Text, View, StyleSheet, Modal, Button, TouchableOpacity, Touchable, ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react'
import AddWorkoutButton from './addWorkoutButton'



export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [dropdownVisible, setDropDownVisible] = useState(false)

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.date}>Friday, Feb 14</Text>
          <Text style={styles.h1}>My Workout</Text>
        </View>
        <ScrollView contentContainerStyle={styles.cardContainer} style={styles.offWhite}>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.circle}> </Text>
              <Text style={styles.h2}>Chest</Text>
              <Text style={styles.exerciseCount}>0 exercises</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.circle}> </Text>
              <Text style={styles.h2}>Back</Text>
              <Text style={styles.exerciseCount}>0 exercises</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.circle}> </Text>
              <Text style={styles.h2}>Arms</Text>
              <Text style={styles.exerciseCount}>0 exercises</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.circle}> </Text>
              <Text style={styles.h2}>Legs</Text>
              <Text style={styles.exerciseCount}>0 exercises</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.circle}> </Text>
              <Text style={styles.h2}>Glutes</Text>
              <Text style={styles.exerciseCount}>0 exercises</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.circle}> </Text>
              <Text style={styles.h2}>Shoulders</Text>
              <Text style={styles.exerciseCount}>0 exercises</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>
          <AddWorkoutButton onPress={() => setModalVisible((prev) => !prev)}/>
        </View>
        <Modal 
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible((prev) => !prev)
          }}>
            <View style={styles.modalView}>
              <Text style={styles.h1}>Add Workout</Text>
              <DropDownPicker 
                placeholder="Select a muscle group"
                onPress={() => {
                  setDropDownVisible((prev) => !prev)}
                }
                open={dropdownVisible}
                items={[{label: 'Apple', value: 'apple'},
                {label: 'Banana', value: 'banana'}]}
                value={null}
              />
              <TouchableOpacity style={{backgroundColor: 'pink'}} onPress={() => setModalVisible((prev) => !prev)} title="Close">Close</TouchableOpacity>
            </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e9eff6',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    // padding: '20px',
    border: '1px solid #E3E8F1',
    borderRadius: '10px'
  },
  header: {
    backgroundColor: '#FFF1F2',
    width: '100%',
    paddingLeft: '25px',
    paddingTop: '20px',  
    paddingBottom: '20px'
    
  },
  date: {
    color: '#666666',
    marginBottom: '5px'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: '30px',
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '25px', 
    paddingTop: 10
  },
  modalView: {
    width: '80%',
    height: '90%',
    padding: 30,
    margin: 'auto',
    backgroundColor: "pink",
    borderRadius: '15px',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  cardContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAF9F6',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    flexWrap: 'wrap'
  },
  card: {
    borderWidth: 1,
    borderColor: '#FFCCD5',
    width: 155,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 'fit-content',
    padding: 8,
    borderTopWidth: '1px',
    borderTopColor: '#EEEEEE'
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#FFE4E6'
  },
  exerciseCount: {
    color: '#666666',
    fontSize: 15
  },
  offWhite: {
    backgroundColor: '#FAF9F6',
  }
})
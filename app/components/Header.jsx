import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.date}>{props.date}</Text>
            <Text style={styles.h1}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFF1F2',
        width: '100%',
        paddingLeft: 25,
        paddingTop: 20,  
        paddingBottom: 20
        
      },
      date: {
        color: '#666666',
        marginBottom: 5
      },
      h1: {
        fontWeight: 'bold',
        fontSize: 30,
      }
})
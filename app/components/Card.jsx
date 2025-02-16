import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card(props) {

    return (
        <TouchableOpacity onPress={props.handlePress}>
            <View style={styles.card}>
              <Text style={styles.circle}> </Text>
              <Text style={styles.h2}>{props.title}</Text>
              <Text style={styles.exerciseCount}>0 exercises</Text>
            </View>
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#FFCCD5',
        width: 155,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,

      },
      circle: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#FFE4E6'
      },
      h2: {
        width: 120,
        height: 40,
        fontWeight: 'bold',
        fontSize: '25px', 
        paddingTop: 10,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      exerciseCount: {
        color: '#666666',
        fontSize: 15
      }
})
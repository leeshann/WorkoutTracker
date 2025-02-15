import React from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function AddWorkoutButton(props) {
    return (
        <>
            <TouchableOpacity onPress={props.onPress} style={styles.button} title="Add Workout">
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF8B9C',
        width: '80px',
        height: '80px',
        borderRadius: '100px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: '18px',
        color: 'white'
    }
})
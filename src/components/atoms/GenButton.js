import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const GenButton = ({gen, onPress}) => {
    return (
       <TouchableOpacity style={styles.GenButton} onPress={onPress}>
              <Text style={styles.textNumber}>{gen}</Text>
       </TouchableOpacity>
    )
}

export default GenButton;

const styles = StyleSheet.create({
    GenButton: {
        backgroundColor: "white",
        height: 40,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    textNumber: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        padding: 10,
    }
})

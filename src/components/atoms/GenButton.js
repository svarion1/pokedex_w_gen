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
        backgroundColor: "#a3d56660",
        width: 30,
        height: 30,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    textNumber: {
        fontSize: 20,
        color: "black",
    }
})

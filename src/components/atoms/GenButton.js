import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const GenButton = ({gen, data, index, navigation, color}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={() => navigation.navigate("GenerationDetail", {generation: index, data: data})}>
            <Text style={{fontSize:23}}>{index}</Text>
            <Text style={styles.text}>{gen} Gen</Text>
        </TouchableOpacity>
    )
}

export default GenButton;

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 10,
        marginBottom:20,
        width: "100%",
        height: "auto",
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection:"column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        elevation: 7,
       
    },
    text: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        padding: 10,
    }
})

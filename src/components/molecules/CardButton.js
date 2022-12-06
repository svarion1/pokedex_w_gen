import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

const CardButton = ({value, onPress, text}) => {
   
    return (
       <TouchableOpacity style={{...styles.CardButton, backgroundColor: value}} onPress={onPress}>
              <Text style={styles.titleText}>{text}</Text>
              <Image style={styles.image} source={require("../../assets/icon.png")}/>
        </TouchableOpacity>
    )
}


export default CardButton;

const styles = StyleSheet.create({

    CardButton: {
        width: "58%",
        borderRadius: 20,
        marginLeft: 5,
        padding: 10,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleText: {
        fontSize: 22,
       fontFamily: "Alexandria-SemiBold",
        color: "#ffffff",
    },
    image: {
        width: 40,
        height: 40,
        opacity: 0.2,
    },
})


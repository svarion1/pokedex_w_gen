import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { useState } from "react";

// Get screen dimensions for responsive design
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const isSmallScreen = SCREEN_WIDTH < 375;
const isMediumScreen = SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414;

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
        width: isSmallScreen ? "47%" : "48%",
        borderRadius: 20,
        marginHorizontal: 2,
        padding: isSmallScreen ? 12 : isMediumScreen ? 14 : 16,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: isSmallScreen ? 55 : isMediumScreen ? 65 : 70,
    },
    titleText: {
        fontSize: isSmallScreen ? 14 : isMediumScreen ? 16 : 18,
        fontFamily: "Alexandria-SemiBold",
        color: "#ffffff",
        flexShrink: 1,
        marginRight: 8,
    },
    image: {
        width: isSmallScreen ? 25 : isMediumScreen ? 30 : 35,
        height: isSmallScreen ? 25 : isMediumScreen ? 30 : 35,
        opacity: 0.2,
    },
})


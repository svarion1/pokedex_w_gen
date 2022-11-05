import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const TypeDetail = ({route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{route.params.type}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>This is the {route.params.type} type</Text>
            </View>
        </View>
    )
}

export default TypeDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    body: {
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});


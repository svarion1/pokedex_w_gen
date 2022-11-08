import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {colors, backgroundColors} from "../theme/colors.js";

const getMoves = async() => {
    const response = await fetch("https://pokeapi.co/api/v2/move/");
    const data = await response.json();
    return data.results;
}


const MovesScreen = ({navigation}) => {
    const [moves, setMoves] = React.useState([]);
    React.useEffect(() => {
        getMoves().then((data) => {
            setMoves(data);
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Moves</Text>
            <ScrollView>
                {moves.map((move, index) => {
                    return (
                        <TouchableOpacity style={styles.button} key={index} onPress={() => {console.log(move); navigation.navigate("MoveDetail", {move: move.name, url: move.url})}}>
                            <Text style={styles.text}>{move.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default MovesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColors.normal,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.normal,
        marginBottom: 20,
    },
    button: {
        backgroundColor: colors.normal,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});

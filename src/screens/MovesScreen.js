import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {colors, backgroundColors} from "../theme/colors.js";

const getMoves = async() => {
    const response = await fetch("https://pokeapi.co/api/v2/move/?limit=250");
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
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >
                <Text style={styles.title}>Moves</Text>
            </View>
            <View style={{flex:9}}>
                <FlatList 
                    data={moves}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("MoveDetail", {move: item.name, url: item.url})}}>
                                <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </SafeAreaView>
    );
}

export default MovesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColors.normal,
    },
    title: {
        fontSize: 30,
        color: "black",
        fontFamily:"Alexandria-SemiBold",
        marginBottom: 20,
        flex: 0.5,   
    },
    button: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.dark,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: "Alexandria-Medium",
        color: "white",
        textTransform: "capitalize",
    },
});

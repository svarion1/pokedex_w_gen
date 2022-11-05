import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {colors, backgroundColors} from "../theme/colors.js";

const TypesScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Types</Text>
                <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.normal}]} onPress={() => navigation.navigate("TypeDetail", {type: "normal"})}>
                            <Text style={styles.text}>Normal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.fighting}]} onPress={() => navigation.navigate("TypeDetail", {type: "fighting"})}>
                            <Text style={styles.text}>Fighting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.flying}]} onPress={() => navigation.navigate("TypeDetail", {type: "flying"})}>
                            <Text style={styles.text}>Flying</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.poison}]} onPress={() => navigation.navigate("TypeDetail", {type: "poison"})}>
                            <Text style={styles.text}>Poison</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.ground}]} onPress={() => navigation.navigate("TypeDetail", {type: "ground"})}>
                            <Text style={styles.text}>Ground</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.rock}]} onPress={() => navigation.navigate("TypeDetail", {type: "rock"})}>
                            <Text style={styles.text}>Rock</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.bug}]} onPress={() => navigation.navigate("TypeDetail", {type: "bug"})}>
                            <Text style={styles.text}>Bug</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.ghost}]} onPress={() => navigation.navigate("TypeDetail", {type: "ghost"})}>
                            <Text style={styles.text}>Ghost</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.steel}]} onPress={() => navigation.navigate("TypeDetail", {type: "steel"})}>
                            <Text style={styles.text}>Steel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.fire}]} onPress={() => navigation.navigate("TypeDetail", {type: "fire"})}>
                            <Text style={styles.text}>Fire</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.water}]} onPress={() => navigation.navigate("TypeDetail", {type: "water"})}>
                            <Text style={styles.text}>Water</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.grass}]} onPress={() => navigation.navigate("TypeDetail", {type: "grass"})}>
                            <Text style={styles.text}>Grass</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.electric}]} onPress={() => navigation.navigate("TypeDetail", {type: "electric"})}>
                            <Text style={styles.text}>Electric</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.psychic}]} onPress={() => navigation.navigate("TypeDetail", {type: "psychic"})}>
                            <Text style={styles.text}>Psychic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.ice}]} onPress={() => navigation.navigate("TypeDetail", {type: "ice"})}>
                            <Text style={styles.text}>Ice</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.dragon}]} onPress={() => navigation.navigate("TypeDetail", {type: "dragon"})}>
                            <Text style={styles.text}>Dragon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor:backgroundColors.dark}]} onPress={() => navigation.navigate("TypeDetail", {type: "dark"})}>
                            <Text style={styles.text}>Dark</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColors.fairy}]} onPress={() => navigation.navigate("TypeDetail", {type: "fairy"})}>
                            <Text style={styles.text}>Fairy</Text>
                        </TouchableOpacity>
                    </View>
        </SafeAreaView>
    )
}

export default TypesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    body: {
        flex: 0.9,
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        }
        
        
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

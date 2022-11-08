import React, { useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { backgroundColors } from '../theme/colors'

const getPokemon = async (limit, offset) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data;
}

const GenerationScreen = ({route, navigation}) => {
    const [firstGen, setFirstGen] = React.useState({});
    const [secondGen, setSecondGen] = React.useState({});
    const [thirdGen, setThirdGen] = React.useState({});

    useEffect(() => {
        getPokemon(151, 0).then((data) => {
            setFirstGen(data.results);
        });
        getPokemon(100, 151).then((data) => {
            setSecondGen(data.results);
        }
        );
        getPokemon(135, 251).then((data) => {
            setThirdGen(data.results);
        }
        );
    }, []);

    console.log(firstGen);

    return (
        <>
        <View style={styles.container}>
            <Text>Generations Screen</Text>
        </View>
        <View   style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        <View style={styles.column}>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#2bbb5a"}]} onPress={() => navigation.navigate("GenerationDetail", {generation: 1, data:firstGen})}>
                <Text style={styles.text}>I</Text>
                <Text style={styles.text}>First Gen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#55c463"}]} onPress={() => navigation.navigate("GenerationDetail", {generation: 3 , data:thirdGen})}>
                <Text style={styles.text}>III</Text>
                <Text style={styles.text}>Third Gen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#73ce6e"}]} onPress={() => navigation.navigate("GenerationDetail", {generation: 5, })}>
                <Text style={styles.text}>V</Text>
                <Text style={styles.text}>Fifth Gen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#8cd77a"}]} onPress={() => navigation.navigate("GenerationDetail", {generation: 7})}>
                <Text style={styles.text}>VII</Text>
                <Text style={styles.text}>Seventh Gen</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#a4e086"}]} onPress={() => navigation.navigate("GenerationDetail", {generation: 2, data: secondGen})}>
                <Text style={styles.text}>II</Text>
                <Text style={styles.text}>Second Gen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#b9e994"}]} onPress={() => navigation.navigate("GenerationDetail", {generation: 4})}>
                <Text style={styles.text}>IV</Text>
                <Text style={styles.text}>Fourth Gen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#cef3a3"}]} onPress={() => navigation.navigate("GenerationDetail", {generation: 6})}>
                <Text style={styles.text}>VI</Text>
                <Text style={styles.text}>Sixth Gen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#e1fcb3"}]} onPress={() => navigation.navigate("GenerationDetail", {generation: 8})}>
                <Text style={styles.text}>VIII</Text>
                <Text style={styles.text}>Eighth Gen</Text>
            </TouchableOpacity>
        </View>
        </View>
    </>
    )
}

export default GenerationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    column: {
        flex: 1,
        flexDirection: "column",
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

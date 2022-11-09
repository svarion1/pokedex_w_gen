import React, { useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native'
import { backgroundColors } from '../theme/colors'
import GenButton from '../components/atoms/GenButton'
const getPokemon = async (limit, offset) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data;
}

const GenerationScreen = ({route, navigation}) => {
    const [firstGen, setFirstGen] = React.useState({});
    const [secondGen, setSecondGen] = React.useState({});
    const [thirdGen, setThirdGen] = React.useState({});
    const [fourthGen, setFourthGen] = React.useState([]);
    const [fifthGen, setFifthGen] = React.useState([]);
    const [sixthGen, setSixthGen] = React.useState([]);
    const [seventhGen, setSeventhGen] = React.useState([]);
    const [eighthGen, setEighthGen] = React.useState([]);

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
        getPokemon(107, 386).then((data) => {
            setFourthGen(data.results);
        }
        );
        getPokemon(156, 493).then((data) => {
            setFifthGen(data.results);
        }
        );
        getPokemon(72, 649).then((data) => {
            setSixthGen(data.results);
        }
        );
        getPokemon(88, 721).then((data) => {
            setSeventhGen(data.results);
        }
        );
        getPokemon(89, 809).then((data) => {
            setEighthGen(data.results);
        }
        );
    }, []);


    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.title}>Choose a generation!</Text>
        </View>
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems:"center"}}>
            <View style={styles.column}>
                <GenButton color={"#2bbb5a"} index={"I"} data={firstGen} gen={"First"} navigation={navigation}/>
                <GenButton color={"#55c463"} index={"III"} data={thirdGen} gen={"Third"} navigation={navigation}/>
                <GenButton color={"#73ce6e"} index={"V"} data={fifthGen} gen={"Fifth"} navigation={navigation}/>
                <GenButton color={"#8cd77a"} index={"VII"} data={seventhGen} gen={"Seventh"} navigation={navigation}/>
            </View>
            <View style={styles.column}>
                <GenButton color={"#a4e086"} index={"II"} data={secondGen} gen={"Second"} navigation={navigation}/>
                <GenButton color={"#b9e994"} index={"IV"} data={fourthGen} gen={"Fourth"} navigation={navigation}/>
                <GenButton color={"#cef3a3"} index={"VI"} data={sixthGen} gen={"Sixth"} navigation={navigation}/>
                <GenButton color={"#e1fcb3"} index={"VIII"} data={eighthGen} gen={"Eighth"} navigation={navigation}/>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default GenerationScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    column: {
        flex: 1,
        height: "80%",
        marginHorizontal: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      
    
    },
  
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
});

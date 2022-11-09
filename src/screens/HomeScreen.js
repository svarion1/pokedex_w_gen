import React, { useEffect, useMemo } from "react";
import { FlatList, StyleSheet, Text, View, ImageBackground, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import header from '../assets/images/Pokeball_header.png'
import GenSelector from "../utils/GenSelector";
import GenButton from "../components/atoms/GenButton";


const test = [1, 2, 3, 4, 5, 6, 7, 8]

const getPokemon = async (limit, offset) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data;
}

const HomeScreen = ({route, navigation}) => {
    const [pokemon, setPokemon] = React.useState([]);
    const [gen, setGen] = React.useState(1);
    const [limit, setLimit] = React.useState(151);
    const [offset, setOffset] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
 

   for (let i = 0; i < 8; i++) {
         const gen = GenSelector({gen: i + 1});
            const limit = gen.limit;
            const offset = gen.offset;
            useEffect(() => {
                getPokemon(limit, offset).then((data) => {
                    switch (i) {
                        case 0:
                            setFirstGen(data.results);
                            break;
                        case 1:
                            setSecondGen(data.results);
                            break;
                        case 2:
                            setThirdGen(data.results);
                            break;
                        case 3:
                            setFourthGen(data.results);
                            break;
                        case 4:
                            setFifthGen(data.results);
                            break;
                        case 5:
                            setSixthGen(data.results);
                            break;
                        case 6:
                            setSeventhGen(data.results);
                            break;
                        case 7:
                            setEighthGen(data.results);
                            break;
                        default:
                            break;
                    }
                });
            }, []);
    }
    

    useEffect(() => {
        getPokemon(limit, offset).then((data) => {
            setPokemon(data.results);
            setLoading(false);
        });
    }, [{limit, offset}]);
    
    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }
    else {
   
    
    return (
      <>
        <SafeAreaView  />
            <ImageBackground resizeMode="contain" style={{width: "100%", height: 200}} source={header}>
                <View style={styles.container}>
                    <Text style={styles.title}>Generation {gen}</Text>
                    <View style={styles.buttonContainer}>
                        <FlatList 
                            horizontal={true}
                            data={test}
                            renderItem={({item}) => (
                                <GenButton
                                    onPress={() => {
                                        //change gen
                                        setGen(item);
                                        //change limit
                                        const gen = GenSelector({gen: item});

                                        setLimit(gen.limit);
                                        setOffset(gen.offset);
                                    }}
                                    gen={item}
                                />
                            )}

                        />
                    </View>
                </View>
            </ImageBackground>
          
        <View id="test" style={styles.container}>
           <FlatList 
              data={firstGen}
              renderItem={({item}) =><Button title={`${item.name}`} onPress={() => { navigation.navigate('PokeDetail', {name: item.name, url: item.url})}}/>}
              style={{width: "100%"}}
           />
        </View>

      </>
    );
  }
}

  
  export default HomeScreen;

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#a55",
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        header: {
            backgroundColor: "#bebebe",
            flex: 0.4,
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: "100%",
            
            resizeMode: "contain",
        },
        title: {
            fontSize: 30,
            fontWeight: "bold",
            color: "#fff",
            textShadowColor: "#000",
            textShadowOffset: {width: 1, height: 1},

        },
        buttonContainer: {
       justifyContent: "center",
         alignItems: "center",
            width: "100%",
            flexWrap: "wrap",
        },
        button: {
            backgroundColor: "#fff",

        },


    });

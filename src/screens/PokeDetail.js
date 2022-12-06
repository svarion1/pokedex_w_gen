import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import NumConverter from "../utils/NumConverter";
import RadarChart from '../components/organisms/RadarChart.js';
import Color from "react-native-charts-wrapper";



const PokeDetail = ({ route }) => {
    const { data, image } = route.params;
    const [id, setId] = React.useState(0);
    const [frontSprite, setFrontSprite] = React.useState([]);
    const [rearSprite, setRearSprite] = React.useState("");
    const [type, setType] = React.useState([]);
    const [height, setHeight] = React.useState(0);
    const [weight, setWeight] = React.useState(0);
    const [stats, setStats] = React.useState([]);


    useEffect(() => {
        setId(data.pokemon.id);
        setFrontSprite(data.pokemon.sprites.front_default);
        setRearSprite(data.pokemon.sprites.back_default);
        setType(data.pokemon.types);
        setHeight(data.pokemon.height);
        setWeight(data.pokemon.weight);
        setStats(data.pokemon.stats);
    }, [])


    return (
        <>
            <View style={styles.header}>
                <Text style={{ fontSize: 32, color: "black", textTransform: "capitalize" }}>{data.pokemon.name}</Text>
                <Text style={{ fontSize: 25, color: "black", paddingHorizontal: 15 }}>#{id}</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: `${image.imageUrl}` }} />
                </View>
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: `${frontSprite}` }} />
                    <Image style={styles.sprite} source={{ uri: `${rearSprite}` }} />
                </View>

                <View style={styles.infoContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.info}>Height: {height}</Text>
                        <Text style={styles.info}>Weight: {weight}</Text>
                    </View>
                    <Text style={styles.info}>Abilities: </Text>
                    <View style={{ flexDirection: "row" }}>
                        {data.pokemon.abilities.map((ability, index) => {
                            return (
                                <Text key={index} style={styles.info}>{ability.ability.name}</Text>
                            )
                        })}
                    </View>

                    <View>
                        <RadarChart stats={stats} />
                    </View>
                </View>
            </View>

        </>
    );
}

export default PokeDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2b5",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: "#a55",
        padding: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 0.4,
        marginTop: "5%",

        borderRadius: 300,
        backgroundColor: "white",


    },
    image: {
        width: 250,
        height: 250,
    },
    infoContainer: {
        flex: 0.5,
        alignItems: 'center',
        marginTop: "5%",

    },
    info: {
        fontSize: 20,
        color: "black",
        textTransform: "capitalize",
        marginHorizontal: 10,
    },
    spriteContainer: {
        flex: 0.1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
    },
    sprite: {
        width: 100,
        height: 100,
        marginHorizontal: 10,
    }



});

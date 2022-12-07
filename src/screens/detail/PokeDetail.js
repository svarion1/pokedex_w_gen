import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import NumConverter from "../../utils/NumConverter";
import RadarChart from '../../components/organisms/RadarChart.js';
import Color from "react-native-charts-wrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundColors } from "../../theme/colors";



const PokeDetail = ({ route }) => {
    const { data, image } = route.params;
    const [id, setId] = React.useState(0);
    const [frontSprite, setFrontSprite] = React.useState([]);
    const [rearSprite, setRearSprite] = React.useState("");
    const [mainType, setMainType] = React.useState("");
    const [height, setHeight] = React.useState(0);
    const [weight, setWeight] = React.useState(0);
    const [stats, setStats] = React.useState([]);


    useEffect(() => {
        setId(data.pokemon.id);
        setFrontSprite(data.pokemon.sprites.front_default);
        setRearSprite(data.pokemon.sprites.back_default);
        setMainType(data.pokemon.types[0].type.name);
        setHeight(data.pokemon.height);
        setWeight(data.pokemon.weight);
        setStats(data.pokemon.stats);
    }, [])


    return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: backgroundColors[mainType], borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 32, color: "black", textTransform: "capitalize", fontFamily:"Alexandria-SemiBold" }}>{data.pokemon.name}</Text>
                <Text style={{ fontSize: 25, color: "black", paddingHorizontal: 15, fontFamily:"Alexandria-SemiBold" }}>#{id}</Text>
            </View>
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <Image style={{ width: 200, height: 200 }} source={{ uri: `${image.imageUrl}` }} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: `${frontSprite}` }} />
                <Image style={{ width: 100, height: 100 }} source={{ uri: `${rearSprite}` }} />
            </View>
            


        </View>
        <View style={{ flex: 1, backgroundColor: "#ffffff", alignItems: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, color: "black", fontFamily:"Alexandria-SemiBold" }}>Height</Text>
                    <Text style={{ fontSize: 20, color: "black", fontFamily:"Alexandria-SemiBold" }}>{height / 10} m</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, color: "black", fontFamily:"Alexandria-SemiBold" }}>Weight</Text>
                    <Text style={{ fontSize: 20, color: "black", fontFamily:"Alexandria-SemiBold" }}>{weight / 10} kg</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, color: "black", fontFamily:"Alexandria-SemiBold" }}>Abilities</Text>
                    {data.pokemon.abilities.map((ability, index) => {
                            return (
                                <Text key={index} style={styles.info}>{ability.ability.name}</Text>
                            )
                        })}
                </View>
            </View>
        </View>

        <View style={{flex:2}}>
                <RadarChart stats={stats} />
        </View>


    </SafeAreaView>
    
        
    );
}

export default PokeDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2b5",
        flex:1,
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
       
        marginTop: "5%",

        borderRadius: 300,
        backgroundColor: "white",


    },
    image: {
        width: 250,
        height: 250,
    },
    infoContainer: {
        flex: 3,
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
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: 'center',
        padding: 10,
       
    },
    sprite: {
        width: 100,
        height: 100,
        marginHorizontal: 10,
    }



});

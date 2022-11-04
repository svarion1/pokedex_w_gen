import React, { useEffect, useMemo } from "react";
import { FlatList, StyleSheet, Text, View, ImageBackground, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import header from '../assets/images/Pokeball_header.png'
import GenSelector from "../utils/GenSelector";
import GenButton from "../components/atoms/GenButton";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "../components/organisms/NewsCard";
import CardButton from "../components/molecules/CardButton";

const DATE = new Date().toISOString().slice(0, 10);
const URL = `https://newsapi.org/v2/everything?q=pokémon&from=${DATE}&sortBy=popularity&language=en&apiKey=2c5edced3f484d1b9336ee97baded0c7`

const getNews = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

const WelcomeScreen = ({route, navigation}) => {
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        getNews().then((data) => {
            setNews(data.articles);
            setLoading(false);
        })
    }, [])

    
    
    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    } else {

        return (
             <>
             <SafeAreaView style={styles.container}>
                 <ScrollView style={styles.scrollView}>
                        <ImageBackground source={header} style={styles.image}>
                            <Text style={styles.text}>Welcome to the Pokedex!</Text>
                            <Text style={styles.search}>Search Pokemon, Moves, Abilities...</Text>
                        </ImageBackground>
                        <View style={styles.buttonContainer}>
                            <View style={styles.row}>
                                <CardButton text="Pokedex" value="#2CDAB1" onPress={() => navigation.navigate('Home')} />
                                <CardButton text="Moves" value="#F7786B" onPress={() => console.log("moves")}/>
                            </View>
                            <View style={styles.row}>
                                <CardButton text="Abilities" value="#58ABF6" onPress={() => console.log("abilities")}/>
                                <CardButton text="Items" value="#FFCE4B" onPress={() => console.log("items")}/>
                            </View>
                            <View style={styles.row}>
                                <CardButton text="Locations" value="#9F5BBA" onPress={() => console.log("locations")}/>
                                <CardButton text="Type Charts" value="#CA8179" onPress={() => console.log("types")}/>
                            </View>
                        </View>
                       <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", marginEnd:10 }}>
                            <Text style={styles.news}>News</Text>
                            <GenButton gen={"See All"} onPress={() => console.log("see all")}/>
                        </View>   
                        <View style={styles.newsContainer}>
                            <FlatList 
                                data={news.slice(0, 15)}
                                renderItem={({item}) => <NewsCard title={item.title} date={DATE} image={item.urlToImage} />}
                                keyExtractor={(item) => item.title}
                                
                            />
                        </View>
                 </ScrollView>
             </SafeAreaView>
             </>
        );
    };
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a55",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#a55",
    },
    image: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
    },
    search: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    newsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "space-between",
        width: "80%",
    },
    news: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
    },
    seeAllButton: {
        color: "white",
        height: 20,
        fontSize: 20,
        fontWeight: "bold",
        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
    },



});

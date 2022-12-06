import React, { useCallback, useEffect, useMemo } from "react";
import { FlatList, StyleSheet, Text, View, ImageBackground, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';

import header from "../assets/images/Pokeball_header.png";
import NewsCard from "../components/organisms/NewsCard";
import CardButton from "../components/molecules/CardButton";

const DATE = new Date().toISOString().slice(0, 10);
const URL = `https://newsapi.org/v2/everything?q=pokémon&from=${DATE}&sortBy=popularity&language=en&apiKey=2c5edced3f484d1b9336ee97baded0c7`

const getNews = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

const WelcomeScreen = ({ route, navigation }) => {
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    const [newsNumber, setNewsNumber] = React.useState(5);

    useEffect(() => {
        getNews().then((data) => {
            setNews(data.articles);
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        Font.loadAsync({
          "sf-pro-display-regular": require("../assets/fonts/sf-pro-display-regular.ttf"),
          "sf-pro-display-bold": require("../assets/fonts/sf-pro-display-bold.ttf"),
          "Alexandria-Light": require("../assets/fonts/Alexandria-Light.ttf"),
          "Alexandria-Regular": require("../assets/fonts/Alexandria-Regular.ttf"),
          "Alexandria-SemiBold": require("../assets/fonts/Alexandria-SemiBold.ttf"),
          "Alexandria-Medium": require("../assets/fonts/Alexandria-Medium.ttf"),

        }).then(() => setFontsLoaded(true));
      }, []);


    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    } else {

        return (
          <SafeAreaView style={styles.page}>
            <View style={styles.headContainer}>
                <ImageBackground style={styles.imageContainer} source={header}>
                    <Text style={styles.titleText}>Welcome to the Pokedex!</Text>
                    <Text style={styles.search}>Search Pokemon, Moves, Abilities...</Text>
                </ImageBackground>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.row}>
                        <CardButton text="Pokedex" value="#2CDAB1" onPress={() => navigation.navigate('GenerationScreen')} />
                        <CardButton text="Moves" value="#F7786B" onPress={() => navigation.navigate("MovesScreen")} />
                    </View>
                    <View style={styles.row}>
                        <CardButton text="Abilities" value="#58ABF6" onPress={() => console.log("abilities")} />
                        <CardButton text="Items" value="#FFCE4B" onPress={() => console.log("items")} />
                    </View>
                    <View style={styles.row}>
                        <CardButton text="Locations" value="#9F5BBA" onPress={() => console.log("locations")} />
                        <CardButton text="Type Charts" value="#CA8179" onPress={() => navigation.navigate("TypesScreen",)} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>News</Text>
                    <Text style={styles.seeAll} onPress={() => navigation.navigate("NewsDetail", {news: news})}>See all</Text>
                </View>
                <View style={styles.newsContainer}>
                    <FlatList
                        data={news.slice(0, newsNumber)}
                        renderItem={({ item }) => <NewsCard title={item.title} date={DATE} image={item.urlToImage} link={item.url} />}
                        keyExtractor={(item) => item.title}
                    />
                </View>
            </View>
          </SafeAreaView>
        );
    };
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ccc",
    },
    headContainer: {
        flex: 0.8,
        backgroundColor: "#fff",
        alignItems: "center",
        borderWidth: 1,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: "#ccc",
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        marginHorizontal: 20,
    },
    container: {
        flex: 0.2,
        backgroundColor: "#a55",
        alignItems: "center",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#a55",
    },
    imageContainer: {
        width: "100%",
        flex:0.2,
        alignItems: "center",
    },
    titleText: {
        fontSize: 37,
        color: "#000",
        fontFamily: "Alexandria-SemiBold",
    },
    text: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Alexandria-SemiBold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
    },
    search: {
        color: "black",
        fontSize: 20,
        fontFamily: "Alexandria-Regular",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        
    },
    buttonContainer: {
        flex: 0.8,
        justifyContent: "center",
        marginTop: 5,
        
    },
    newsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
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
        fontFamily:"Alexandria-SemiBold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 5,
    },
    seeAll: {
        color: "#000",
        fontSize: 20,
        fontFamily: "Alexandria-Regular",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        marginRight: 20,
    },
    title: {
        color: "#000",
        fontSize: 30,
        fontFamily: "Alexandria-SemiBold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        marginLeft: 5,
        marginTop: 10,
    },
});

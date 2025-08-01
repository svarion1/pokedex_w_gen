import React, { useCallback, useEffect, useMemo } from "react";
import { FlatList, StyleSheet, Text, View, ImageBackground, Button, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';

import header from "../assets/images/Pokeball_header.png";
import NewsCard from "../components/organisms/NewsCard";
import CardButton from "../components/molecules/CardButton";
import { NEWS_API_KEY } from '@env'; // Importing the API key from .env file

// Get screen dimensions for responsive design
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const isSmallScreen = SCREEN_WIDTH < 375;
const isMediumScreen = SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414;
const isLargeScreen = SCREEN_WIDTH >= 414;

const DATE = new Date().toISOString().slice(0, 10);
const FROM_DATE = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10); // 30 days ago
const URL = `https://newsapi.org/v2/everything?q=pokémon&from=${FROM_DATE}&sortBy=popularity&language=en&apiKey=${NEWS_API_KEY}`;

const getNews = async () => {
    try {
        console.log('Fetching news from:', URL);
        const response = await fetch(URL);
        const data = await response.json();
        
        if (data.status === 'error') {
            console.error('News API Error:', data.message);
            return { articles: [] };
        }
        
        console.log('News fetched successfully. Total articles:', data.totalResults);
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        return { articles: [] };
    }
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
        const loadFonts = async () => {
            try {
                await Font.loadAsync({
                    "sf-pro-display-regular": require("../assets/fonts/sf-pro-display-regular.ttf"),
                    "sf-pro-display-bold": require("../assets/fonts/sf-pro-display-bold.ttf"),
                    "Alexandria-Light": require("../assets/fonts/Alexandria-Light.ttf"),
                    "Alexandria-Regular": require("../assets/fonts/Alexandria-Regular.ttf"),
                    "Alexandria-SemiBold": require("../assets/fonts/Alexandria-SemiBold.ttf"),
                    "Alexandria-Medium": require("../assets/fonts/Alexandria-Medium.ttf"),
                });
                setFontsLoaded(true);
            } catch (error) {
                console.error('Error loading fonts:', error);
                setFontsLoaded(true); // Continue even if fonts fail to load
            }
        };
        
        loadFonts();
    }, []);


    if (loading || !fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>Loading...</Text>
            </View>
        )
    } else {

        return (
            <SafeAreaView style={styles.page}>
                <View style={styles.headContainer}>
                    <ImageBackground style={styles.imageContainer} source={header}>
                        <Text style={styles.titleText}>Welcome to the Pokedex!</Text>
                        <Text style={styles.search}>Discover Pokemon, Moves, Abilities...</Text>
                    </ImageBackground>

                    <View style={styles.buttonContainer}>
                        <View style={styles.row}>
                            <CardButton text="Pokedex" value="#2CDAB1" onPress={() => navigation.navigate('GenerationScreen')} />
                            <CardButton text="Moves" value="#F7786B" onPress={() => navigation.navigate("MovesScreen")} />
                        </View>
                        <View style={styles.row}>
                            <CardButton text="Abilities" value="#58ABF6" onPress={() => navigation.navigate("AbilitiesScreen")} />
                            <CardButton text="Items" value="#FFCE4B" onPress={() => navigation.navigate("ItemsScreen")} />
                        </View>
                        <View style={styles.row}>
                            <CardButton text="Locations" value="#9F5BBA" onPress={() => navigation.navigate("LocationsScreen")} />
                            <CardButton text="Type Charts" value="#CA8179" onPress={() => navigation.navigate("TypesScreen",)} />
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>News</Text>
                        <Text style={styles.seeAll} onPress={() => navigation.navigate("NewsDetail", { news: news })}>See all</Text>
                    </View>
                    <View style={styles.newsContainer}>
                        {news.length > 0 ? (
                            <FlatList
                                data={news.slice(0, newsNumber)}
                                renderItem={({ item }) => <NewsCard title={item.title} date={DATE} image={item.urlToImage} link={item.url} />}
                                keyExtractor={(item, index) => `${item.title}-${index}`}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 10 }}
                            />
                        ) : (
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>No news available at the moment</Text>
                            </View>
                        )}
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
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingHorizontal: SCREEN_WIDTH * 0.05, // 5% of screen width
        paddingBottom: 10, // Adjusted padding for better spacing
    },
    bottomContainer: {
        flex: 1.25,
        backgroundColor: "#ccc",
        paddingHorizontal: SCREEN_WIDTH * 0.02, // 2% of screen width
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        marginHorizontal: SCREEN_WIDTH * 0.05,
        marginTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#a55",
    },
    imageContainer: {
        width: "100%",
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
    },
    titleText: {
        fontSize: isSmallScreen ? 20 : isMediumScreen ? 24 : 28,
        color: "#000",
        fontFamily: "Alexandria-SemiBold",
        textAlign: "center",
        marginBottom: 8,
        lineHeight: isSmallScreen ? 24 : isMediumScreen ? 28 : 32,
    },
    text: {
        color: "black",
        fontSize: isSmallScreen ? 32 : isMediumScreen ? 36 : 40,
        fontWeight: "bold",
        fontFamily: "Alexandria-SemiBold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textAlign: "center",
    },
    search: {
        color: "black",
        fontSize: isSmallScreen ? 12 : isMediumScreen ? 14 : 16,
        fontFamily: "Alexandria-Regular",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textAlign: "center",
        paddingHorizontal: 10,
        lineHeight: isSmallScreen ? 16 : isMediumScreen ? 18 : 20,
        marginBottom: 10,
    },
    buttonContainer: {
        flex: 0.7,
        justifyContent: "center",
        marginTop: 10,
        paddingHorizontal: SCREEN_WIDTH * 0.01,
    },
    newsContainer: {
        flex: 1,
        backgroundColor: "#ccc",
        paddingHorizontal: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 8,
    },
    news: {
        color: "white",
        fontSize: isSmallScreen ? 24 : isMediumScreen ? 28 : 30,
        fontFamily: "Alexandria-SemiBold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 5,
    },
    seeAll: {
        color: "#000",
        fontSize: isSmallScreen ? 14 : isMediumScreen ? 16 : 18,
        fontFamily: "Alexandria-Regular",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        marginRight: 10,
    },
    title: {
        color: "#000",
        fontSize: isSmallScreen ? 20 : isMediumScreen ? 22 : 24,
        fontFamily: "Alexandria-SemiBold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        marginLeft: 5,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    emptyText: {
        fontSize: isSmallScreen ? 16 : 18,
        fontFamily: "Alexandria-Regular",
        color: "#666",
        textAlign: "center",
    },
});

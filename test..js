<>
<SafeAreaView style={styles.container}>
    <ImageBackground source={header} style={styles.image}>
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
   <View style={{flexDirection:"row", borderWidth:1}}>
    <View style={{ flexDirection: "row", marginEnd: 10, borderWidth:1 }}>
            <Text style={styles.news}>News</Text>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Button title={"See All"} onPress={() => navigation.navigate("NewsDetail", { news: news })} />
            </View>
        </View>
   </View>
    <View style={styles.newsContainer}>
        <FlatList
            data={news.slice(0, newsNumber)}
            renderItem={({ item }) => <NewsCard title={item.title} date={DATE} image={item.urlToImage} link={item.url} />}
            keyExtractor={(item) => item.title}

        />
    </View>
</SafeAreaView>
</>
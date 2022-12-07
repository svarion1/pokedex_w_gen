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


<>
<SafeAreaView style={{flex:1}}>

            



            <View style={styles.header}>
                <Text style={{ fontSize: 32, color: "black", textTransform: "capitalize", fontFamily:"Alexandria-SemiBold" }}>{data.pokemon.name}</Text>
                <Text style={{ fontSize: 25, color: "black", paddingHorizontal: 15, fontFamily:"Alexandria-SemiBold" }}>#{id}</Text>
            </View>
        
            <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: `${image.imageUrl}` }} />
            </View>
            <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: `${frontSprite}` }} />
                    <Image style={styles.sprite} source={{ uri: `${rearSprite}` }} />
            </View>

            <View style={styles.container}>
                
               

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
                </View>
                

            </View>
            

        </SafeAreaView>


</>
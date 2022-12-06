import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, LogBox } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const getItems = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/item?limit=300`);
    const data = await response.json();
    return data;
}

const ItemsScreen = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        getItems().then((data) => {
            setItems(data.results);
        });

    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Items</Text>
                </View>
                <View style={{ alignItems:"center" }}>
                    <FlatList
                        data={items}
                        numColumns={4}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                                <Image style={styles.image} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png` }} />
                            </View>
                             )
                         }
                        keyExtractor={(item) => item.name}
                    />
                </View>
          
        </SafeAreaView>
    )
}

export default ItemsScreen;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 50,
        height: 50, 
    },
    item: {
        width: 80,
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#c1fde6",
    },
    text: {
        textTransform: "capitalize",
        fontFamily: "Alexandria-Light",
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        textTransform: "capitalize",
        fontFamily: "Alexandria-SemiBold"
    },
});

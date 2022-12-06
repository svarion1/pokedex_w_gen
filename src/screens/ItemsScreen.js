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
                <Text>Items Screen</Text>
                <View style={{ flex: 1 }}>
                    <FlatList

                        data={items}
                        numColumns={5}
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
            </View>
        </SafeAreaView>
    )
}

export default ItemsScreen;

const styles = StyleSheet.create({

    container: {
        borderWidth: 3,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonItem: {
        backgroundColor: "#a55",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    image: {
        width: 50,
        height: 50,
        padding: 10,
    },
    item: {


        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderWidth: 1,
    },
    text: {
        textTransform: "capitalize",
    }

});

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const getTypeDetail = async (type) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
    return data;
}

const TypeDetail = ({ route }) => {
    const [typeDetail, setTypeDetail] = React.useState({});

    React.useEffect(() => {
        getTypeDetail(route.params.type).then((data) => {
            setTypeDetail(data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{route.params.type}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>This is the {route.params.type} type</Text>
                <Text style={styles.text}>It is super effective against:</Text>
                <FlatList
                    data={typeDetail.damage_relations?.double_damage_from}
                    renderItem={({ item }) => (
                        <Text style={styles.text}>{item.name}</Text>
                    )}
                    keyExtractor={(item) => item.name}
                />
                <Text style={styles.text}>It is not very effective against:</Text>
                <FlatList
                    data={typeDetail.damage_relations?.half_damage_from}
                    renderItem={({ item }) => (
                        <Text style={styles.text}>{item.name}</Text>
                    )}
                    keyExtractor={(item) => item.name}
                />

            </View>
        </View>
    )
}

export default TypeDetail;

const styles = StyleSheet.create({
    container: {
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
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    body: {
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const getAbilities = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/ability");
    const data = await response.json();
    return data;
};



const AbilitiesScreen = ({ navigation }) => {
    const [abilities, setAbilities] = React.useState({});

    React.useEffect(() => {
        getAbilities().then((data) => {
            setAbilities(data);
        });
    }, []);


    return (
        <View style={styles.container}>
            <Text>Abilities Screen</Text>
            <FlatList
                data={abilities.results}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.buttonAbility} onPress={() => navigation.navigate("AbilityDetail", { ability: item.name })}>
                        <Text style={{ textTransform: "capitalize" }}>{item.name}</Text>
                    </TouchableOpacity>
                )}

                keyExtractor={(item) => item.name}
            />
        </View>
    )

}

export default AbilitiesScreen;

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
    buttonAbility: {
        backgroundColor: "#a55",
        padding: 10,
        margin: 10,
        borderRadius: 10,

    }

});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from 'expo-font';

const getAbilities = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/ability");
    const data = await response.json();
    return data;
};



const AbilitiesScreen = ({ navigation }) => {
    const [abilities, setAbilities] = React.useState({});
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    React.useEffect(() => {
        getAbilities().then((data) => {
            setAbilities(data);
        });
        

        Font.loadAsync({
                "sf-pro-display-regular": require("../assets/fonts/sf-pro-display-regular.ttf"),
                "sf-pro-display-bold": require("../assets/fonts/sf-pro-display-bold.ttf"),
                "Alexandria-Light": require("../assets/fonts/Alexandria-Light.ttf"),
                "Alexandria-Regular": require("../assets/fonts/Alexandria-Regular.ttf"),
                "Alexandria-SemiBold": require("../assets/fonts/Alexandria-SemiBold.ttf"),
                "Alexandria-Medium": require("../assets/fonts/Alexandria-Medium.ttf"),
    
        }).then(() => setFontsLoaded(true));
        

    }, []);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{fontSize: 32, marginBottom: 16, fontFamily: "Alexandria-SemiBold"}}>Abilities</Text>
                
                <FlatList
                    data={abilities.results}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.buttonAbility} onPress={() => navigation.navigate("AbilityDetail", { ability: item.name })}>
                            <Text style={{ textTransform: "capitalize", fontSize:20, fontFamily: "Alexandria-Light" }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}

                    keyExtractor={(item) => item.name}
                />
            </View>
        </SafeAreaView>
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
        fontFamily: "Alexandria-semibold",
    },
    buttonAbility: {
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bbb",
        padding: 10,
        margin: 10,
        borderRadius: 10,

    }

});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";


const AbilityDetail = ({ route }) => {
    const [abilityDetail, setAbilityDetail] = React.useState({});
    React.useEffect(() => {
        getAbilityDetail().then((data) => {
            setAbilityDetail(data);
        });
    }, []);
    const getAbilityDetail = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${route.params.ability}`);
        const data = await response.json();
        return data;
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{route.params.ability}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>{abilityDetail.effect_entries?.[1].effect}</Text>
            </View>
        </View>
    )
}

export default AbilityDetail;

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
        marginBottom: 20,
    },
    body: {
        flex: 9,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});

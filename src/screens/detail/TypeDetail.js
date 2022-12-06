import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Tag from "../../components/atoms/Tag";

const getTypeDetail = async (type) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
    return data;
}

const TypeDetail = ({ route }) => {
    const [typeDetail, setTypeDetail] = React.useState({});
    const [weakTypes, setWeakTypes] = React.useState([]);
    const [strongTypes, setStrongTypes] = React.useState([]);

    React.useEffect(() => {
        getTypeDetail(route.params.type).then((data) => {
            setTypeDetail(data);
            setStrongTypes(data.damage_relations?.double_damage_from);
            setWeakTypes(data.damage_relations?.half_damage_from);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{route.params.type} Type</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>This is the {route.params.type} type</Text>
                <Text style={styles.text}>It is super effective against:</Text>
                <FlatList
                    data={strongTypes}
                    renderItem={({ item }) => (
                       <Tag type={item.name} />
                    )}
                    keyExtractor={(item) => item.name}
                />
                <Text style={styles.text}>It is not very effective against:</Text>
                <FlatList
                    data={weakTypes}
                    renderItem={({ item }) => (
                        <Tag type={item.name} />
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
        fontFamily: "Alexandria-SemiBold",
        textTransform: "capitalize",
    },
    body: {
        flex: 5,
        alignItems: "center" ,
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontFamily: "Alexandria-Light",
    },
    tag: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },

});

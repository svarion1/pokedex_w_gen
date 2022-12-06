import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const getMoveDetails = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const MoveDetail = ({route}) => {
    const [move, setMove] = React.useState({});
    React.useEffect(() => {
        getMoveDetails(route.params.url).then((data) => {
            setMove(data);
        });

    }, []);

   

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{route.params.move}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>This is the {route.params.move} move</Text>
                <Text style={styles.text}></Text>
            </View>
        </View>
    )
}

export default MoveDetail;

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

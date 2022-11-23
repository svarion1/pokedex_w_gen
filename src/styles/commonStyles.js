import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    // Text Styles
    textNormal: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
    },
    searchText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
    },
    newsText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
    },

    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },

    // Containers Styles
    scrollView: {
        flex: 1,
        backgroundColor: "#a55",
    },
    buttonContainer: {
        flex: 0.5,
        justifyContent: "center",

    },
    newsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    rowButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "space-between",
        width: "80%",
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
    },
    body: {
        flex: 0.9,
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    // Components Styles
    tag: {
        borderRadius: 5,
        marginRight: 5,
        padding: 5,
    },
    image: {
        width: "100%",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

});

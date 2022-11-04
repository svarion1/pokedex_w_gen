import { Image, StyleSheet, Text, View,  } from 'react-native'
import React, { useEffect, useCallback, useMemo } from 'react'

const url = "https://cdn.pocket-lint.com/r/s/1201x/assets/images/160207-games-news-feature-pokemon-scarlet-and-pokemon-violet-everything-we-know-about-the-next-pokemon-games-image7-dywuaxdgrf.jpg"


const NewsCard = ({title, date, image}) => {


    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={{uri: `${image}`}} style={styles.image}/>
        </View>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textContainer: {
        width: "70%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    date: {
        fontSize: 15,
        color: "#a5a5a5",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    }
})

import { Image, StyleSheet, Text, TouchableOpacity, View, Linking, Dimensions  } from 'react-native'
import React, { useEffect, useCallback, useMemo } from 'react'

const url = "https://cdn.pocket-lint.com/r/s/1201x/assets/images/160207-games-news-feature-pokemon-scarlet-and-pokemon-violet-everything-we-know-about-the-next-pokemon-games-image7-dywuaxdgrf.jpg"

// Get screen dimensions for responsive design
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const isSmallScreen = SCREEN_WIDTH < 375;
const isMediumScreen = SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414;


const NewsCard = ({title, date, image, link}) => {


    return (
        <TouchableOpacity onPress={()=>Linking.openURL(link)}>
            <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={{uri: `${image}`}} style={styles.image} resizeMode="cover"/>
        </View>
        </TouchableOpacity>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: isSmallScreen ? 8 : 12,
        marginHorizontal: SCREEN_WIDTH * 0.03,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        minHeight: isSmallScreen ? 80 : 100,
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
        justifyContent: "center",
    },
    title: {
        fontSize: isSmallScreen ? 14 : isMediumScreen ? 16 : 18,
        fontFamily: "Alexandria-SemiBold",
        lineHeight: isSmallScreen ? 18 : isMediumScreen ? 20 : 22,
        marginBottom: 4,
        numberOfLines: 3,
        flexWrap: 'wrap',
    },
    date: {
        fontSize: isSmallScreen ? 12 : isMediumScreen ? 13 : 15,
        color: "#a5a5a5",
        fontFamily: "Alexandria-Light",
        marginTop: 2,
    },
    image: {
        width: isSmallScreen ? 70 : isMediumScreen ? 80 : 90,
        height: isSmallScreen ? 70 : isMediumScreen ? 80 : 90,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    }
})

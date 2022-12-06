import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import NewsCard from "../../components/organisms/NewsCard";

const DATE = new Date().toISOString().slice(0, 10);

const NewsDetail = ({route}) => {
    const {news} = route.params;

    
    return (
        <>
            <View style={styles.header}>
                <Text style={{fontFamily:"Alexandria-Regular",fontSize:32, color: "black", textTransform: "capitalize"}}>All News from Today</Text>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={news.slice(5, news.length)}
                    renderItem={({item}) => <NewsCard title={item.title} date={DATE} image={item.urlToImage} link={item.url} />}
                    
                        
                />
            </View>
            

          
    
        </>
    )
    }

    export default NewsDetail;

    const styles = StyleSheet.create({
        header: {
            flex: 1,
            padding: 20,
            backgroundColor: "#a55",
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            flex: 10,
            backgroundColor: "#a55",
        },

    });

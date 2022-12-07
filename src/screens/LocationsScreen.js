import React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const LocationsScreen = () => {
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadLocations = async () => {
        setIsLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/region');
        const data = await response.json();
        return data;
    };

    const getColor = () => {    
        const colors = ["#f19999", "#f1d699", "#99f1d6", "#99d6f1", "#9999f1", "#d699f1", "#f199d6"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    }


    useEffect(() => {
        loadLocations().then((data) => {
            setLocations(data.results);
            setIsLoading(false);
        }
        );
    }, []);

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView>
            <View style={{padding:20, alignItems: "center", justifyContent:"center"}}>
                <FlatList
                    data={locations}
                    renderItem={({ item }) => (
                        <View style={{width:150, height: 60,  alignItems:"center", justifyContent:"center", margin: 10, borderRadius:25, backgroundColor: getColor()}}>
                            <Text style={{textTransform:"capitalize", fontFamily:"Alexandria-SemiBold", fontSize: 26}}>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </SafeAreaView>
    );
}

export default LocationsScreen;

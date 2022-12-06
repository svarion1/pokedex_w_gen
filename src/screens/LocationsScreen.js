import React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
const LocationsScreen = () => {
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadLocations = async () => {
        setIsLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/region');
        const data = await response.json();
        return data;
    };

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
        <View>
            <FlatList
                data={locations}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}

export default LocationsScreen;

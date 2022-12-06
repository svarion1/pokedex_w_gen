import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PokeDetail from '../screens/PokeDetail';
import WelcomeScreen from '../screens/WelcomScreen';
import NewsDetail from '../screens/NewsDetail';
import TypesScreen from '../screens/TypesScreen';
import TypeDetail from '../screens/TypeDetail';
import MovesScreen from '../screens/MovesScreen';
import MoveDetail from '../screens/MoveDetail';
import GenerationScreen from '../screens/GenerationScreen';
import GenerationDetail from '../screens/GenerationDetail';
import AbilitiesScreen from '../screens/AbilitiesScreen';
import AbilityDetail from '../screens/AbilityDetail';
import ItemsScreen from '../screens/ItemsScreen';
import LocationsScreen from '../screens/LocationsScreen';

const Stack = createNativeStackNavigator();

export const PokeStack = ({ route }) => {

    // console.log(id)

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="NewsDetail"
                component={NewsDetail}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}

            />
            <Stack.Screen
                name="PokeDetail"
                component={PokeDetail}
                options={{ headerShown: true, headerRight: () => <Button title="Shiny" onPress={() => console.log("shiny")} /> }}

            />
            <Stack.Screen
                name="GenerationScreen"
                component={GenerationScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="GenerationDetail"
                component={GenerationDetail}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="TypesScreen"
                component={TypesScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="TypeDetail"
                component={TypeDetail}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MovesScreen"
                component={MovesScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MoveDetail"
                component={MoveDetail}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AbilitiesScreen"
                component={AbilitiesScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AbilityDetail"
                component={AbilityDetail}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ItemsScreen"
                component={ItemsScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="LocationsScreen"
                component={LocationsScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}

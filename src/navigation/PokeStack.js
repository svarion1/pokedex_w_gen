import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PokeDetail from '../screens/PokeDetail';


const Stack = createNativeStackNavigator();

export const PokeStack = ({route}) => {
     
   // console.log(id)

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                
            />
            <Stack.Screen 
                name="PokeDetail" 
                component={PokeDetail} 
                options={{headerShown: true, headerRight: () => <Button title="Shiny" onPress={() => console.log("shiny")}/>}}

            />
        </Stack.Navigator>
    );
    };
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { PokeStack } from './src/navigation/PokeStack';
import { BottomGenStack } from './src/navigation/BottomGenStack';

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <PokeStack/>
        </NavigationContainer>
    );
};

export default AppNavigation;
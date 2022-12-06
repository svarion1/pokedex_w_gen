import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PokeStack } from './src/navigation/PokeStack';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { useFonts } from 'expo-font';

const AppNavigation = () => {

    const [isLoaded, setIsLoaded] = React.useState(false);

    const [fontsLoaded] = useFonts({
        'sf-pro-display-regular': require('./src/assets/fonts/sf-pro-display-regular.ttf'),
    });
  
    const test = React.useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1200);
    }, []);

    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={isLoaded}
            logoImage={require("./src/assets/images/pokeball.png")}
            backgroundColor={"#ffffff"}
            logoHeight={150}
            logoWidth={150}>
            <NavigationContainer screenProps={{ setAppLoaded: test }}>
                <PokeStack />
            </NavigationContainer>
        </AnimatedSplash>
    );
};

export default AppNavigation;

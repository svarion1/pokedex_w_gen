//return 8 tabs as Generation selection buttons
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PokeStack } from "./PokeStack";

const Tab = createBottomTabNavigator();

export const BottomGenStack = ({route}) => {
 
    return(
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black' }}>
        <Tab.Screen options={{title:"1"}} name="gen1" component={PokeStack} initialParams={{id:1}}/>
        <Tab.Screen options={{title:"2"}} name="gen2" component={PokeStack} initialParams={{id:2}} />
        <Tab.Screen options={{title:"3"}} name="gen3" component={PokeStack} initialParams={{id:3}}/>
        <Tab.Screen options={{title:"4"}} name="gen4" component={PokeStack} initialParams={{id:4}}/>
        <Tab.Screen options={{title:"5"}} name="gen5" component={PokeStack} initialParams={{id:5}}/>
        <Tab.Screen options={{title:"6"}} name="gen6" component={PokeStack} initialParams={{id:6}}/>
        <Tab.Screen options={{title:"7"}} name="gen7" component={PokeStack} initialParams={{id:7}}/>
        <Tab.Screen options={{title:"8"}} name="gen8" component={PokeStack} initialParams={{id:8}}/>
    </Tab.Navigator>
    );
};

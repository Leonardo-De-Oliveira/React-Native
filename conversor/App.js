import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from '@expo/vector-icons'; 

import Km_Mi from './componentes/Km_Mi';
import Quilometros from './componentes/Quilometros';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        
        <Tabs.Screen 
        name="Quilômetros para Milhas" 
        component={Km_Mi} 
        options={{ 
          tabBarIcon: () => ( 
            <Entypo name="ruler" size={24} color="black" />
          ),
        }} />
        <Tabs.Screen 
        name="Milhas para Quilômetros" 
        component={Quilometros} 
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="ruler-combined" size={24} color="black" />
          ),
        }} />

      </Tabs.Navigator>
    </NavigationContainer>
  );
}

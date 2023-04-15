import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import Xbox from './componentes/Xbox';
import PS from './componentes/PS';
import Nintendo from './componentes/Nintendo';

import nintendo from './assets/nintendo.png';

const Tabs = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={{
        headerTitleStyle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
        headerStyle: { backgroundColor: '#000' },

        tabBarInactiveTintColor: '#000',
      }}>
        

        <Tabs.Screen 
        name='Xbox' 
        component={ Xbox } 
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="xbox" size={24} color="green" />
          ),
        }}/>

        <Tabs.Screen 
        name='PS'
        component={ PS } 
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="playstation" size={24} color="blue" />
          ),
        }}/>

        <Tabs.Screen 
        name='Nintendo' 
        component={ Nintendo } 
        options={{
          tabBarIcon: () => (
            <Image  source={nintendo} />
          ),
        }}/>

      </Tabs.Navigator>
    </NavigationContainer>
  );
}
 

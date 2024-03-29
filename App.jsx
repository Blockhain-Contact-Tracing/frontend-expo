import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import Resources from './components/Resources';
import Media from './components/Media';
import Updates from './components/Updates';
import LoginPage from './components/LoginPage'

function SettingsScreen() {
  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: makeIconRender('home') }}/>
        <Tab.Screen name="Resources" component={Resources} options={{tabBarIcon: makeIconRender('bag-personal-outline')}}/>
        <Tab.Screen name="Media" component={Media} options={{tabBarIcon: makeIconRender('newspaper-variant-outline')}}/>
        <Tab.Screen name="Updates" component={Updates} options={{ tabBarIcon: makeIconRender('chart-bar') }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

function makeIconRender(name) {
  return ({color,size })=>(
    <MaterialCommunityIcons name={name} color={'#00d94a'} size={size}/>
  );
}

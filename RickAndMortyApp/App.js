import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersListScreen from './src/screens/CharactersListScreen';
import CharacterDetailsScreen from './src/screens/CharacterDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharactersList">
        <Stack.Screen name="CharactersList" component={CharactersListScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import {  useAuthContext } from './contexts/AuthContext';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    const {loggedIn} = useAuthContext();
  return (

        <Stack.Navigator>
       {loggedIn ? (
        <>
         <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Chat' component={ChatScreen} />
        </>
       ): (
            <Stack.Screen name='Login' component={LoginScreen} />
       )}
        
    </Stack.Navigator>

  )
}
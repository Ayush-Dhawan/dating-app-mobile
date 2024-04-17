import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import {  useAuthContext } from './contexts/AuthContext';
import { getData } from './services/async-storage';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    const {loggedIn, setLoggedIn} = useAuthContext();

    useEffect(() =>{
      checkUserAuth();
    }, [])
  
    const checkUserAuth = async () =>{
      const result: any = await getData('login');
      if(result !== 'true') setLoggedIn(false);
      else setLoggedIn(true);
    }
  
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
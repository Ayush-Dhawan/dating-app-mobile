import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { client } from '../utils/kindeConfig';
import { useAuthContext } from '../contexts/AuthContext';

export default function HomeScreen() {
    const navigation = useNavigation();
    const {setLoggedIn} = useAuthContext();

    const handleLogout = async () => {
      const loggedOut = await client.logout();
      if (loggedOut) {
          // User was logged out
          setLoggedIn(false)
      }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      {/* @ts-ignore */}
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Text>Go to chat</Text>
      </TouchableOpacity>
      <Button title='logout' onPress={handleLogout} />
    </View>
  )
}
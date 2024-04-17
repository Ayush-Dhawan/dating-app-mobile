import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { client } from '../utils/kindeConfig';
import { storeData } from '../services/async-storage';

export default function LoginScreen() {

  const {setLoggedIn} = useAuthContext();

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      // User was authenticated
      await storeData('login', 'true')
      setLoggedIn(true);
    }else{
      await storeData('login', 'false')
      setLoggedIn(false)
    }
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='Sign in with google' onPress={handleSignIn}  />
    </View>
  )
}
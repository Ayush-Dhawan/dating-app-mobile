import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { client } from '../utils/kindeConfig';
import { getData, storeData } from '../services/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown : false
    })
  }, [])



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
    <SafeAreaView style={styles.container}>
      <ImageBackground
      style={{height: '100%'}}
      source={{uri: "https://tinder.com/static/tinder.png"}}
      >
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={{textAlign: 'center', fontWeight: '600'}}>Sign in & get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  button : {
    position: 'absolute',
    bottom: 142,
    right: '20%',
    backgroundColor: 'white',
    padding: 15,
    width: '60%',
    borderRadius: 99
  }
})
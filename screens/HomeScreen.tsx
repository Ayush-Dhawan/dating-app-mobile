import { View, Text, Button, TouchableOpacity, SafeAreaView, StyleSheet, TouchableHighlight, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { client } from '../utils/kindeConfig';
import { useAuthContext } from '../contexts/AuthContext';
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons'
import { colors } from '../utils/colors';
import Swiper from 'react-native-deck-swiper';

export default function HomeScreen() {
    const navigation = useNavigation();
    const {setLoggedIn, userInfo} = useAuthContext();


    useLayoutEffect(() =>{
      navigation.setOptions({
        headerShown: false
      })
    }, [])

    const handleLogout = async () => {
      const loggedOut = await client.logout();
      if (loggedOut) {
          // User was logged out
          setLoggedIn(false)
      }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout}>
            <Image style={styles.pfp} source={{uri: userInfo.picture}} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={{height: 65, width: 65}} source={require('../images/Tinder-Emblem.png')} />
        </TouchableOpacity>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={ () => {navigation.navigate("Chat")}}>
            <Ionicons name='chatbubbles-sharp' size={45} color={colors.TINDER_PINK} /> 
        </TouchableOpacity>
      </View>

    {/* end of header */}

    {/* cards  */}
    

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 27
  },
  header: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pfp:{
    height: 45,
    width: 45,
    borderRadius: 99
  }
})
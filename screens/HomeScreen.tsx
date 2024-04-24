import { View, Text, Button, TouchableOpacity, SafeAreaView, StyleSheet, TouchableHighlight, Image } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { client } from '../utils/kindeConfig';
import { useAuthContext } from '../contexts/AuthContext';
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons'
import { colors } from '../utils/colors';
import Swiper from 'react-native-deck-swiper';

export default function HomeScreen() {
    const navigation = useNavigation();
    const {setLoggedIn, userInfo} = useAuthContext();
    const swipeRef = useRef<any>()
    const DUMMY_DATA = [
      {
        firstName: "John",
        lastName: "Doe",
        picture: "https://picsum.photos/200",
        age: 30,
        id: 1,
        job: 'nalla'
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        picture: "https://picsum.photos/200",
        age: 25,
        id: 2
      },
      {
        firstName: "Michael",
        lastName: "Johnson",
        picture: "https://fastly.picsum.photos/id/650/200/300.jpg?hmac=iNg9Umek-SwBR_yU0igvABZSTcRJFdhp1zyaqp0PdIw",
        age: 35,
        id: 3
      },
      {
        firstName: "Emily",
        lastName: "Williams",
        picture: "https://picsum.photos/200",
        age: 28,
        id: 4
      },
      {
        firstName: "Daniel",
        lastName: "Brown",
        picture: "https://picsum.photos/200",
        age: 32,
        id: 5
      }
    ];

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
        {/* @ts-ignore */}
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
            <Image style={{height: 65, width: 65}} source={require('../images/Tinder-Emblem.png')} />
        </TouchableOpacity>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={ () => {navigation.navigate("Chat")}}>
            <Ionicons name='chatbubbles-sharp' size={45} color={colors.TINDER_PINK} /> 
        </TouchableOpacity>
      </View>

    {/* end of header */}

    {/* cards  */}
    
  <View>
    <Swiper
    ref={swipeRef}
    containerStyle={{backgroundColor: 'transparent'}}
    stackSize={5}
    cardIndex={0}
    verticalSwipe={false}
    cards={DUMMY_DATA}
    animateCardOpacity
    onSwipedLeft={() =>{
      console.log("PASS")
    }}
    onSwipedRight={() =>{
      console.log("MATCH")
    }}
    overlayLabels={{
      left: {
        title: "NOPE",
        style: {
          label: {
            textAlign: 'right',
            color: 'red'
          }
        }
      },
      right: {
        title: "MATCH",
        style: {
          label: {
            textAlign: 'left',
            color: 'green'
          }
        }
      }
    }}
    renderCard={(card: any)=>{
      return (<View key={card.id} style={[styles.card, styles.cardShadow]}>
        <Image style={{height: '100%', width: '100%', borderRadius: 30, position: 'absolute', top: 0}} source={{uri: card.picture}} />
        <View style={styles.description}>
          <View>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{card.firstName} {card.lastName}</Text>
            <Text>{card.job || ""}</Text>
          </View>
            <Text>{card.age}</Text>
        </View>
      </View>)
    }}
     />
  </View>

  <View style={styles.swipeButtons}>
      <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()}
       style={{display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 99, width: 50, height: 50, backgroundColor: colors.RED_200}}>
        <Entypo name='cross' size={24} color={'red'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => swipeRef.current.swipeRight()}
       style={{display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 99, width: 50, height: 50, backgroundColor: colors.GREEN_200}}>
        <AntDesign name='heart' size={24} color={'green'} />
      </TouchableOpacity>
  </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    position: 'relative',
    height: '100%'
  },
  header: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card: {
    backgroundColor: 'white', height: '75%', borderRadius: 30, position: 'relative'
  },
  pfp:{
    height: 45,
    width: 45,
    borderRadius: 99
  },
  description : {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  swipeButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 80,
    width: '100%'
  }
})
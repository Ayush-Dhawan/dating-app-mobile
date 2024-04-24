import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { client } from '../utils/kindeConfig';
import { useAuthContext } from '../contexts/AuthContext';
import { colors } from '../utils/colors';
// import {db} from '../firebase'

export default function ModalScreen() {
    const navigation = useNavigation();
    const {userInfo} = useAuthContext();
    const [image, setImage] = useState<string>('');
    const [job, setJob] = useState<string>('');
    const [age, setAge] = useState<string>('');

    const incompleteForm = !image || !job || !age;

    // const updateUserProfile = () =>{
    //     setDoc(doc(db, 'users', userInfo.id), {
    //         id: userInfo.id,
    //         name: userInfo.given_name,
    //         photoURL: image,
    //         job: job,
    //         age: age,
    //         timestamp: serverTimestamp()
    //     })
    // }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    }, [])



  return (
    <View style={styles.container}>
      <Image
      style={{height: 90, width: '100%'}}
      resizeMode='contain'
      source={{uri: "https://links.papareact.com/2pf"}}
       />
       <Text style={styles.welcomeText}>Welcome {userInfo?.given_name}</Text>

       <Text style={styles.label}>
        Step 1: Profile pic
       </Text>
       <TextInput
       value={image}
       onChangeText={text => setImage(text)}
       style={{padding: 4, textAlign: 'center', fontSize: 20}}
       placeholder='Profile pic URL'
        />

<Text style={styles.label}>
        Step 2: Your Occupation
       </Text>
       <TextInput
       value={job}
       onChangeText={job => setJob(job)}
       style={{padding: 4, textAlign: 'center', fontSize: 20}}
       placeholder='Your occupation'
        />

<Text style={styles.label}>
        Step 3: Age
       </Text>
       <TextInput
       maxLength={2}
       keyboardType='numeric'
       value={age}
       onChangeText ={age => setAge(age)}
       style={{padding: 4, textAlign: 'center', fontSize: 20}}
       placeholder='Your age'
        />

        <TouchableOpacity disabled={incompleteForm} style={[incompleteForm ? styles.disabledBtn : styles.updateBtn]}>
            <Text style={{textAlign: 'center', color: 'white'}}>Update profile</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        padding: 2
    },
    label: {
        textAlign: 'center',
        padding: 4,
        fontWeight: 'bold',
        color: colors.TINDER_PINK,
        marginTop: 20,
        fontSize: 20
    },
    updateBtn: {
        width: 154,
        padding: 12,
        borderRadius: 10,
        marginTop: 80,
        color: 'white',
        backgroundColor: colors.TINDER_PINK
    },
    disabledBtn: {
        width: 154,
        padding: 12,
        borderRadius: 10,
        marginTop: 80,
        color: 'white',
        backgroundColor: '#a9a9a9'
    }
})
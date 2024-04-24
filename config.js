// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
// import { firebase } from "@react-native-firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1zfgM3hdp0tL9JwAlRDc7oDQYjpwXFc4",
  authDomain: "tinderclone-a3db5.firebaseapp.com",
  projectId: "tinderclone-a3db5",
  storageBucket: "tinderclone-a3db5.appspot.com",
  messagingSenderId: "236283801305",
  appId: "1:236283801305:web:6636a2b1f986b324b558c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {firebase}
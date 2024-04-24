// import { useAuthContext } from "../contexts/AuthContext";
// import firestore from '@react-native-firebase/firestore';

// export async function addUser(){
//     const {userInfo} = useAuthContext();
//     console.log("user info: ", userInfo)

//     const data = {
//         email: userInfo.email,
//         name: userInfo.given_name,
//         picture: userInfo.picture,
//         age: '',
//         job: ''
//     }

//     firestore().collection('categories').add(data).then(ref => console.log("logged in")).catch((error: any) => console.log(error.message));
// }

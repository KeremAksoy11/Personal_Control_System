import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword, 
    updateCurrentUser,
    signInWithEmailAndPassword
    } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCq7bivBWFAMewAKdEG7as2V_bVwlTnCqI",
    authDomain: "personelcontrolsystem.firebaseapp.com",
    projectId: "personelcontrolsystem",
    storageBucket: "personelcontrolsystem.appspot.com",
    messagingSenderId: "478028102093",
    appId: "1:478028102093:web:5ee01a4aa9d8a77e896c84",
    measurementId: "G-XV29Z4NK9M"
  };

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app)

export const signup = async (name, email, password) =>{
    await  createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, {displayName : name})
}

export const signIn =  async ( email, password) =>{
  await  signInWithEmailAndPassword(auth, email, password)
}
;
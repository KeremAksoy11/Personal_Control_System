import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
import {getFirestore, collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPersonal } from "../redux/personalSlice";

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
export const auth = getAuth(app)
export const db = getFirestore(app);

export const personalRef = collection(db,"Personal")

export const usePersonalLister = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return onSnapshot(personalRef, (snapshot) => {
    const docs = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {id : doc.id, ...data}
    });
    dispatch(setPersonal((docs)))
  });
}, [dispatch]);
};

/* export const deletePersonal = (id) =>{
  deleteDoc(doc(db, "Personal", id));
}

export const addPersonal = () =>{

  const uid = auth.currentUser?.uid
  if (!uid) return;
  addDoc(personalRef, {
    name : "Tuğçe",
    surname : "BAŞARAN",
    uid : uid
  })
}
 */
/* export const signup = async (name, email, password) =>{
    await  createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, {displayName : name})
}

export const signIn =  async ( email, password) =>{
  await  signInWithEmailAndPassword(auth, email, password)
}; */
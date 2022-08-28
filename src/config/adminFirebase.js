import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMpNlKoftiHFMyIrZx02sAXGyzEIwgz_0",
    authDomain: "personaladmin-ec19a.firebaseapp.com",
    projectId: "personaladmin-ec19a",
    storageBucket: "personaladmin-ec19a.appspot.com",
    messagingSenderId: "977749757700",
    appId: "1:977749757700:web:3e317449d6d42a94264a51",
    measurementId: "G-08Z4YG4LVF"
};


const app = initializeApp(firebaseConfig, "admin");
getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);

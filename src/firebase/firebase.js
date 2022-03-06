// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoVmiAqBGI8mRLYX_WhEJGcuvQtSdjdGY",
    authDomain: "stay-fun.firebaseapp.com",
    databaseURL: "https://stay-fun-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stay-fun",
    storageBucket: "stay-fun.appspot.com",
    messagingSenderId: "448301378436",
    appId: "1:448301378436:web:ae814eeaf4a3eb6bc30bd1",
    measurementId: "G-GNPLK9N9D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const auth = getAuth(app);
export { app as FirebaseApp, auth, firestore };
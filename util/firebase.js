// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvGpVmZEb-6A1u9GiqqEJzbubo5vojXYY",
  authDomain: "amorous-95c61.firebaseapp.com",
  projectId: "amorous-95c61",
  storageBucket: "amorous-95c61.appspot.com",
  messagingSenderId: "619218983168",
  appId: "1:619218983168:web:1fe52dac7542a7800a3be5",
  measurementId: "G-WTRMWDH07F"
};

// Initialize Firebase

const createFirebaseApp = (config) => {
    try{
        return getApp()
    }catch{
        initializeApp(config)
    }
}


const app = createFirebaseApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)


export {app, db, auth}
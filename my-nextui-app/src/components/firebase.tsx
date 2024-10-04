import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQmctAOv1LrOisjZEI7-H1IcY7A43pjUU",
  authDomain: "mairu-7f29e.firebaseapp.com",
  projectId: "mairu-7f29e",
  storageBucket: "mairu-7f29e.appspot.com",
  messagingSenderId: "598670307378",
  appId: "1:598670307378:web:02868a364cf80af9224c2b",
  measurementId: "G-53L18Z65C5"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
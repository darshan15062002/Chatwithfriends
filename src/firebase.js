
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDKgJ6jJiKhyiV692C4g-I46VqcdqW0yWk",
    authDomain: "chat-9e0e2.firebaseapp.com",
    projectId: "chat-9e0e2",
    storageBucket: "chat-9e0e2.appspot.com",
    messagingSenderId: "926306274306",
    appId: "1:926306274306:web:23909fecb84fee0169eb1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
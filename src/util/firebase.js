import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA_GjGC_84fREctJNm3DGYIUzXrLtWAVzs",
  authDomain: "dv-clothing-db-d71f9.firebaseapp.com",
  projectId: "dv-clothing-db-d71f9",
  storageBucket: "dv-clothing-db-d71f9.appspot.com",
  messagingSenderId: "773171052543",
  appId: "1:773171052543:web:bf17b5696cf3e69b98b1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

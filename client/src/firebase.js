// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-69e7c.firebaseapp.com",
  projectId: "mern-estate-69e7c",
  storageBucket: "mern-estate-69e7c.appspot.com",
  messagingSenderId: "217440076380",
  appId: "1:217440076380:web:0cc60d13c919d82bd45c99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
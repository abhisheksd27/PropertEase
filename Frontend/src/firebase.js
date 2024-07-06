// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertease-6b1f2.firebaseapp.com",
  projectId: "propertease-6b1f2",
  storageBucket: "propertease-6b1f2.appspot.com",
  messagingSenderId: "704043986163",
  appId: "1:704043986163:web:defe195d3514328aaa1b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
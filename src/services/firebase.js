// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOeDvbnogIYpyGI6jTq_jCm1djrvwmQOM",
  authDomain: "linkpass-d2c05.firebaseapp.com",
  projectId: "linkpass-d2c05",
  storageBucket: "linkpass-d2c05.firebasestorage.app",
  messagingSenderId: "52326641625",
  appId: "1:52326641625:web:63c1bdb163ef4f54edf3c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

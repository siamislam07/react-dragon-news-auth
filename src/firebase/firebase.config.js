// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7tr4v7A46QLhKgn1LN8_rN-XP1OoYY0Y",
    authDomain: "react-dragon-news-auth-594b6.firebaseapp.com",
    projectId: "react-dragon-news-auth-594b6",
    storageBucket: "react-dragon-news-auth-594b6.appspot.com",
    messagingSenderId: "991879526104",
    appId: "1:991879526104:web:a7cfc3d8ee35ea3936c9ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
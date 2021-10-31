// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn2AbniY5jvEdHMhrn2F3L-i_TZ3QFkUU",
    authDomain: "flashcards2-85152.firebaseapp.com",
    projectId: "flashcards2-85152",
    storageBucket: "flashcards2-85152.appspot.com",
    messagingSenderId: "89307691627",
    appId: "1:89307691627:web:318961e2d9464eec564f2e",
    measurementId: "G-174P8G5XEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
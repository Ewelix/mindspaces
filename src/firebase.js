import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBn2AbniY5jvEdHMhrn2F3L-i_TZ3QFkUU",
    authDomain: "flashcards2-85152.firebaseapp.com",
    projectId: "flashcards2-85152",
    storageBucket: "flashcards2-85152.appspot.com",
    messagingSenderId: "89307691627",
    appId: "1:89307691627:web:318961e2d9464eec564f2e",
    measurementId: "G-174P8G5XEP"
})

export const auth = app.auth();
export default app;


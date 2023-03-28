// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2KWflKC6uLAuCMVwHTpudQKccPbbGEk8",
    authDomain: "books-e125c.firebaseapp.com",
    projectId: "books-e125c",
    storageBucket: "books-e125c.appspot.com",
    messagingSenderId: "514743599266",
    appId: "1:514743599266:web:84f876611e1c6dc83917fb",
    measurementId: "G-2TSF1S9SEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
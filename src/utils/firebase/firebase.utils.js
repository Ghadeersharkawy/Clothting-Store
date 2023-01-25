import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAffnY7VNzQz84TxuRSmr0_8Ey2WnT1uSI",
    authDomain: "clothting-store-db.firebaseapp.com",
    projectId: "clothting-store-db",
    storageBucket: "clothting-store-db.appspot.com",
    messagingSenderId: "896588484238",
    appId: "1:896588484238:web:725c8c4eeb188519cb03df"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
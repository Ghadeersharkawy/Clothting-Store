import { initializeApp } from "firebase/app";
//sign in Methods
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//database
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//database Initialize
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // db= database ,'users'= collection name , userAuth.uid = uniq id
    // check if data exist
    const userSnapshot = await getDoc(userDocRef);
    //if data doesn't exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        //set user
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    //if  exist
    return userDocRef;
}
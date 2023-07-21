import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk6t53Z23Ru-K-JEj0E_M2gsl5QoacCbA",
  authDomain: "crwn-clothing-db-6dc89.firebaseapp.com",
  projectId: "crwn-clothing-db-6dc89",
  storageBucket: "crwn-clothing-db-6dc89.appspot.com",
  messagingSenderId: "457151369825",
  appId: "1:457151369825:web:990e1116a1a570448d5020",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async function (userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // create and set the document
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error while creating the user ", error.message);
    }
  }

  return userDocRef;

  // user data exists?

  // returns that user data
};

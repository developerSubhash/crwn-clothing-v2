import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk6t53Z23Ru-K-JEj0E_M2gsl5QoacCbA",
  authDomain: "crwn-clothing-db-6dc89.firebaseapp.com",
  projectId: "crwn-clothing-db-6dc89",
  storageBucket: "crwn-clothing-db-6dc89.appspot.com",
  messagingSenderId: "457151369825",
  appId: "1:457151369825:web:990e1116a1a570448d5020",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = function () {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGoogleRedirect = function () {
  return signInWithRedirect(auth, googleProvider);
};

export const db = getFirestore();

//* Storing all the shopping items to Firestore database.

export const addCollectionsAndDocuments = async function (
  collectionKey,
  objectsToAdd
) {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const documentRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(documentRef, object);
  });

  await batch.commit();
  console.log("done");
};

/////////////////////////////////////////////////////////

//* Fetching Shopping Products data form Firestore database.

export const getCategoriesAndDocuments = async function () {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

/////////////////////////////////////////////////////////

export const createUserDocumentFromAuth = async function (
  userAuth,
  additionalInformation = {}
) {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error while creating the user ", error.message);
    }
  }

  return userDocRef;

  // user data exists?

  // returns that user data
};

export const createAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async function () {
  return await signOut(auth);
};

export const onAuthStateChangedListener = function (callback) {
  return onAuthStateChanged(auth, callback);
};

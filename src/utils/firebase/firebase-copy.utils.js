import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk6t53Z23Ru-K-JEj0E_M2gsl5QoacCbA",
  authDomain: "crwn-clothing-db-6dc89.firebaseapp.com",
  projectId: "crwn-clothing-db-6dc89",
  storageBucket: "crwn-clothing-db-6dc89.appspot.com",
  messagingSenderId: "457151369825",
  appId: "1:457151369825:web:990e1116a1a570448d5020",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const auth = getAuth();
export const practiceSigninWithGooglePopup = function () {
  return signInWithPopup(auth, provider);
};

//* creating users data and then storing that user datat in Firestore database.

const db = getFirestore();
export const storeUserData = async function (userAuth) {
  const userDocumentRefrence = doc(db, "users", userAuth);

  const userDocument = await getDoc(userDocumentRefrence);

  if (!userDocument.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const motto = "There's always an solution.";

    try {
      setDoc(userDocumentRefrence, { displayName, email, createdAt, motto });
    } catch (error) {}
  }

  return userDocumentRefrence;
};

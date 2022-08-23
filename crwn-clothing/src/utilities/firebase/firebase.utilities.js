import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCS1CgZOfT46SP-w-5mntNGvAXuwu2jwAI",
    authDomain: "crwn-clothing-db-4f9c5.firebaseapp.com",
    projectId: "crwn-clothing-db-4f9c5",
    storageBucket: "crwn-clothing-db-4f9c5.appspot.com",
    messagingSenderId: "1086200070114",
    appId: "1:1086200070114:web:bc6b36c1a76adbd5e703bb"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
    
      return userDocRef;
    };
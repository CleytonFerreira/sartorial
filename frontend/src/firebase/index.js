import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import dotenv from 'dotenv';
dotenv.config({path: './.env'})

const config = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID
};

const firebaseApp = initializeApp(config);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return null;
  }

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  try {
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userRef, { displayName, email, createdAt, ...additionalData });
    }
  } catch (error) {
    console.log('Error creating user', error.message);
  }

  return userRef;
};

export { firestore, createUserProfileDocument, auth };
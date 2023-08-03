import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAKCisNJibcPmbjOFfKHxGqCqTeuQfFpnI",
  authDomain: "sartorial-c91b8.firebaseapp.com",
  projectId: "sartorial-c91b8",
  storageBucket: "sartorial-c91b8.appspot.com",
  messagingSenderId: "953913770772",
  appId: "1:953913770772:web:0ff6d8861eec464800b801"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return; }
  const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData, });
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }
  return userRef;
};

export { firestore, createUserProfileDocument, auth };
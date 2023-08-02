import firebase from 'firebase/app';
import 'firebase/firestore';

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

export{firestore};
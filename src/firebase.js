import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCVf5F9sfb5xmdRUmTQkvkA86Xg2lgPAs",
  authDomain: "challenge-92d82.firebaseapp.com",
  projectId: "challenge-92d82",
  storageBucket: "challenge-92d82.appspot.com",
  messagingSenderId: "335925917453",
  appId: "1:335925917453:web:e3d85ea1b263a0b7562244",
  measurementId: "G-9BJB7KLS16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
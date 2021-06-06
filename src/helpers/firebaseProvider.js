import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth"
import "firebase/functions"

//your firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore()
const auth = firebase.auth()
const functions = firebase.app().functions('europe-west3')

if (window.location.hostname === "localhost") {
  firestore.useEmulator("localhost", 8080)
  functions.useEmulator("localhost", 5001)
}

export { firebase, firestore, auth, functions }
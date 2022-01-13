import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHriXfDOv12jEuBYg7fKUwQeNlAJsK31M",
  authDomain: "jamesmcconnellportfolio.firebaseapp.com",
  projectId: "jamesmcconnellportfolio",
  storageBucket: "jamesmcconnellportfolio.appspot.com",
  messagingSenderId: "147347544556",
  appId: "1:147347544556:web:8810b060d44de1810208c9",
  measurementId: "G-DQPS2X51SS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

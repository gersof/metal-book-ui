// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEJzahcnTdrBmmRohLP7ymunssIJ66cP8",
  authDomain: "metal-book.firebaseapp.com",
  projectId: "metal-book",
  storageBucket: "metal-book.appspot.com",
  messagingSenderId: "78119649597",
  appId: "1:78119649597:web:f0eb1f8a181564500e0554",
  measurementId: "G-TVL33Y7FME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  db= getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {app, db,analytics,storage};
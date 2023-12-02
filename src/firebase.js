// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH3KPBlKI8CPUcbXsjotL0g3__ck806Wc",
  authDomain: "chatapp-feb39.firebaseapp.com",
  projectId: "chatapp-feb39",
  storageBucket: "chatapp-feb39.appspot.com",
  messagingSenderId: "712910875267",
  appId: "1:712910875267:web:a5b3fca17468594208c9b6",
  measurementId: "G-5G64KTVFCC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(); 
export const storage = getStorage();
export const db = getFirestore()


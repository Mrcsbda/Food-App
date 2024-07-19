// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ6IcCCIGCvpoZYQyD_DRJ3iEU-kWD7aM",
  authDomain: "delivery-app-angular-21b8c.firebaseapp.com",
  projectId: "delivery-app-angular-21b8c",
  storageBucket: "delivery-app-angular-21b8c.appspot.com",
  messagingSenderId: "1019033566685",
  appId: "1:1019033566685:web:2aa569a0ccc05be9070a34"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
const analytics = getAnalytics(firebaseApp);

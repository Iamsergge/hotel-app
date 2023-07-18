import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA2TjDcvJEOg4KYvdM8UEN2oNbXfUsnj5o",
  authDomain: "hotel-app-884b5.firebaseapp.com",
  projectId: "hotel-app-884b5",
  storageBucket: "hotel-app-884b5.appspot.com",
  messagingSenderId: "992979252417",
  appId: "1:992979252417:web:4f958aba402a8529671040",
  measurementId: "G-29BSF4N934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db}


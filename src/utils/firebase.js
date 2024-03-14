// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD32Cb021Z8qxtcUUzOH0xiHlAEqbfcWWc",
  authDomain: "netflixgpt-506e0.firebaseapp.com",
  projectId: "netflixgpt-506e0",
  storageBucket: "netflixgpt-506e0.appspot.com",
  messagingSenderId: "980704790073",
  appId: "1:980704790073:web:df064163e4e0d5a051afe8",
  measurementId: "G-PC0CYN4TJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
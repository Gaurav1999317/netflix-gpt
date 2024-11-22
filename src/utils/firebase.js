// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM6JGSz7yqgWYU7C2P367y4maVnZmFItU",
  authDomain: "netflixgpt-70246.firebaseapp.com",
  projectId: "netflixgpt-70246",
  storageBucket: "netflixgpt-70246.firebasestorage.app",
  messagingSenderId: "1028307153685",
  appId: "1:1028307153685:web:2472aa21a855057016af1c",
  measurementId: "G-L08ZZK3H7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();
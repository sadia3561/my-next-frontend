import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNznQTmaCE9tsJD2kXsk7QTMrJLMY07mc",
  authDomain: "sadiya-f5f19.firebaseapp.com",
  projectId: "sadiya-f5f19",
  storageBucket: "sadiya-f5f19.appspot.com",
  messagingSenderId: "436675713397",
  appId: "1:436675713397:web:ff26ea39629704d89cdb3c",
  measurementId: "G-FMJ51JJ2CP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase Auth
export const auth = getAuth(app);

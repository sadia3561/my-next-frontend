// lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// 🔹 Your Firebase web app config
const firebaseConfig = {
  apiKey: "AIzaSyDNznQTmaCE9tsJD2kXsk7QTMrJLMY07mc",
  authDomain: "sadiya-f5f19.firebaseapp.com",
  projectId: "sadiya-f5f19",
  storageBucket: "sadiya-f5f19.firebasestorage.app",
  messagingSenderId: "436675713397",
  appId: "1:436675713397:web:ff26ea39629704d89cdb3c",
  measurementId: "G-FMJ51JJ2CP",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Auth & Analytics (Analytics only works in browser)
const auth = getAuth(app);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// ✅ Export what you need
export { auth, RecaptchaVerifier, signInWithPhoneNumber };

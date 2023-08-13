import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "@firebase/functions";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

const validateRecaptcha = httpsCallable(functions, "validateRecaptcha");
const sendEmail = httpsCallable(functions, "sendEmail");

export { validateRecaptcha, sendEmail, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxNKxIqvSvniW_7821KuDNqptsqz4d_BI",
  authDomain: "chat-app-91a1c.firebaseapp.com",
  projectId: "chat-app-91a1c",
  storageBucket: "chat-app-91a1c.appspot.com",
  messagingSenderId: "843187862905",
  appId: "1:843187862905:web:2d222b94342b9c1de043a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
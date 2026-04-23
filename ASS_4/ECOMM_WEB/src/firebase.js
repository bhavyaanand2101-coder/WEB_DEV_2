import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCXTIb50YM7RmGH-UhB10m_XSSTyslUy54",
  authDomain: "ecomm-app-6c9d6.firebaseapp.com",
  projectId: "ecomm-app-6c9d6",
  storageBucket: "ecomm-app-6c9d6.firebasestorage.app",
  messagingSenderId: "474601028654",
  appId: "1:474601028654:web:21e58d8f608354be2bf3bf",
  measurementId: "G-E5WP065MYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth (IMPORTANT)
export const auth = getAuth(app);

// Analytics (optional, safe check for Vite)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
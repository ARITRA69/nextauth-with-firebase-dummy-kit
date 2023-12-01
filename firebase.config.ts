import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoPUwJ7sscl4O6T3_8yONqsuZLLaDMvZE",
  authDomain: "tukidoo-6e5ad.firebaseapp.com",
  projectId: "tukidoo-6e5ad",
  storageBucket: "tukidoo-6e5ad.appspot.com",
  messagingSenderId: "55966415954",
  appId: "1:55966415954:web:71423ba5220d73bea1b38b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };

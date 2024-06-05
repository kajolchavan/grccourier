
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAnDaHjcVlpN7QVmrpkKGhXIs_SBV7Jb4",
  authDomain: "grc-logistics.firebaseapp.com",
  projectId: "grc-logistics",
  storageBucket: "grc-logistics.appspot.com",
  messagingSenderId: "49815368025",
  appId: "1:49815368025:web:124e51a2d8f8824af39c48",
  measurementId: "G-XJDKTN5HPK"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app)
export const storage = getStorage(app)
export const auth = getAuth()
const analytics = getAnalytics(app);

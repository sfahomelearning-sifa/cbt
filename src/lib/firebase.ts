import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj40ZmndWz2uu5kkkym93w0ueQvX-9dmk",
  authDomain: "english-asesment-cbt.firebaseapp.com",
  databaseURL: "https://english-asesment-cbt-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "english-asesment-cbt",
  storageBucket: "english-asesment-cbt.firebasestorage.app",
  messagingSenderId: "1008114613101",
  appId: "1:1008114613101:web:ea4c4327a3e35b7209b864",
  measurementId: "G-6F7RC3267Q"
};const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };

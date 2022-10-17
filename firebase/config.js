// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKk_te0NW0HeVXevCzWsK_RzUTXYerx7A",
  authDomain: "registro-consultorio.firebaseapp.com",
  projectId: "registro-consultorio",
  storageBucket: "registro-consultorio.appspot.com",
  messagingSenderId: "83664792115",
  appId: "1:83664792115:web:75d95a594554be589ed146",
  measurementId: "G-ND1PLH18PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbSKfv1oT3gMC5z624icPNs803yXTvp5Y",
  authDomain: "onnotes-1286.firebaseapp.com",
  databaseURL: "https://onnotes-1286-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "onnotes-1286",
  storageBucket: "onnotes-1286.appspot.com",
  messagingSenderId: "1066548170268",
  appId: "1:1066548170268:web:34f74c5ee7a4ec487999d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const auth = getAuth(app)
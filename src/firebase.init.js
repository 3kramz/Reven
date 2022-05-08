// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaI4x1Y92GUNFsy-n046njhzBoGAzK7xI",
  authDomain: "riven-driven.firebaseapp.com",
  projectId: "riven-driven",
  storageBucket: "riven-driven.appspot.com",
  messagingSenderId: "771609692746",
  appId: "1:771609692746:web:567e387a46c58fa30734b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
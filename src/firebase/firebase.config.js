// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByoC8TNsiK6TJgOCr3dcOoa5Iqnp97_nA",
  authDomain: "unice-carfts.firebaseapp.com",
  projectId: "unice-carfts",
  storageBucket: "unice-carfts.firebasestorage.app",
  messagingSenderId: "1001925542472",
  appId: "1:1001925542472:web:c7c62da737db9955bc0e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app;
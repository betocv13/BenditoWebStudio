// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj3kYtGN8KX6qXno3GDj0jVDSCU8b2s4A",
  authDomain: "benditowebstudio.firebaseapp.com",
  projectId: "benditowebstudio",
  storageBucket: "benditowebstudio.appspot.com",
  messagingSenderId: "1083780337896",
  appId: "1:1083780337896:web:509822b23a7ebd24c6f95d",
  measurementId: "G-EV2K35HXEK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

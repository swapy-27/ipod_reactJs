// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUdn4NNfRZWwkaGlFyWeHA4wf8TDdoNc",
  authDomain: "ipodreact-b3b95.firebaseapp.com",
  projectId: "ipodreact-b3b95",
  storageBucket: "ipodreact-b3b95.appspot.com",
  messagingSenderId: "1073873311877",
  appId: "1:1073873311877:web:63c1e517c34c6f914971ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =firebase.firestore();

export default db;
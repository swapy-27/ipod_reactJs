import { initializeApp } from 'firebase/app';
import {getFirestore} from  'firebase/firestore';


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
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
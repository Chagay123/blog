// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlo8gUkCI12k-CNHShf_CRF30ERMaxAD8",
  authDomain: "project-blog-17866.firebaseapp.com",
  projectId: "project-blog-17866",
  storageBucket: "project-blog-17866.appspot.com",
  messagingSenderId: "1089142706456",
  appId: "1:1089142706456:web:0881d54b7551092e320e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();

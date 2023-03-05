// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
//import {getAuth, connectAuthEmulator} from 'firebase/auth';
//import {getFunctions, connectFunctionsEmulator} from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDWn9V1QEFRk9sbJZSfXe0oXmTcsWUzVP0",
//   authDomain: "fir-7d244.firebaseapp.com",
//   projectId: "fir-7d244",
//   storageBucket: "fir-7d244.appspot.com",
//   messagingSenderId: "492032292571",
//   appId: "1:492032292571:web:0be971e68ff64c29723efe"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCx_vxQ8dIbHuc8e9QnVtxITj9iI67lyZs",
  authDomain: "db-73b69.firebaseapp.com",
  projectId: "db-73b69",
  storageBucket: "db-73b69.appspot.com",
  messagingSenderId: "369664473359",
  appId: "1:369664473359:web:6284ae70eaed7c132e267a"
};
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig)
//connectAuthEmulator(getAuth(), 'http://127.0.0.1:9099');
//connectFunctionsEmulator(getFunctions(), 'http://127.0.0.1:5001');
//export default app;

const auth = getAuth()
const db = getFirestore();
export { auth , db }
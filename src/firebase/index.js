// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import 'firebase/storage'

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
export { auth, db }
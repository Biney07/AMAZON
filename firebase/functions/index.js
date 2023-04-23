
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCx_vxQ8dIbHuc8e9QnVtxITj9iI67lyZs",
    authDomain: "db-73b69.firebaseapp.com",
    projectId: "db-73b69",
    storageBucket: "db-73b69.appspot.com",
    messagingSenderId: "369664473359",
    appId: "1:369664473359:web:6284ae70eaed7c132e267a"
  };


initializeApp(firebaseConfig)


const auth = getAuth()
const db = getFirestore();
export { auth , db }
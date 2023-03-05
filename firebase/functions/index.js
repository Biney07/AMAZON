// const functions = require("firebase-functions");
// const admin = require("firebase-admin");

// admin.initializeApp();
// const db = admin.firestore();
// // // Create and deploy your first functions
// // // https://firebase.google.com/docs/functions/get-started
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// const adminEmails = ['hasaniblend@yahoo.com', 'eneshetemi@gmail.com'];
// exports.addUserRole = functions.auth.user().onCreate(async (user) => {
//     // condition to promote a user to an admin

//     async function setUserClaims (userClaims) {
//         await admin.auth().setCustomUserClaims(user.uid, userClaims);
    
//         db.collection('roles').doc(user.uid).set({
//             email: user.email,
//             role: userClaims
//         })
//     } 

//     try {
//         if (adminEmails.includes(user.email)) {
//             await setUserClaims({ admin: true });
//         } else if (user.email.endsWith('@amazon.com')) {
//             await setUserClaims({ student: true })
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

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
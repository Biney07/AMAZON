const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const adminEmails = ['hasaniblend@yahoo.com', 'eneshetemi@gmail.com'];
exports.addUserRole = functions.auth.user().onCreate(async (user) => {
    // condition to promote a user to an admin

    async function setUserClaims (userClaims) {
        await admin.auth().setCustomUserClaims(user.uid, userClaims);
    
        db.collection('roles').doc(user.uid).set({
            email: user.email,
            role: userClaims
        })
    } 

    try {
        if (adminEmails.includes(user.email)) {
            await setUserClaims({ admin: true });
        } else if (user.email.endsWith('@amazon.com')) {
            await setUserClaims({ student: true })
        }
    } catch (err) {
        console.log(err);
    }
});
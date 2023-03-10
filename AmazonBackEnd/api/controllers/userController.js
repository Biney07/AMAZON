import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import registerUserSchema from '../validators/user/registerUserSchema';
import admin from '../services/firebase';

const adminEmails = ['hasaniblend@yahoo.com', 'eneshetemi@gmail.com'];

export default {
    register: async (req, res) => {
        // validate the user input
        const validationResult = registerUserSchema.validate(req.body)

        if (validationResult.error) {
            return res.status(StatusCodes.BAD_REQUEST)
                .json({
                    error: validationResult.error.message,
                    message: ReasonPhrases.BAD_REQUEST
                });
        }

        const { name, email, password } = req.body;
        try {
            const user = await admin.auth().createUser({
                email,
                password
            })

            await admin.auth().updateUser(user.uid, { displayName: name })

            if (adminEmails.includes(user.email)) {
                const userClaim = { admin: true }
                await admin.auth().setCustomUserClaims(user.uid, userClaim);
                await admin.firestore().collection("roles")
                    .doc(user.uid)
                    .set({
                        email: user.email,
                        role: userClaim
                    })
            }

            return res.json({ user });
        } catch (error) {
            return res.status(StatusCodes.FORBIDDEN).json({ error: error.message, message: ReasonPhrases.FORBIDDEN })

        }
    },
    allUsers: async (req, res) => {
        try {
          const listUsersResult = await admin.auth().listUsers();
          const users = listUsersResult.users;
    
          
    
          return res.json({ users });
        } catch (error) {
          res.json("Error: " + error);
        }
      },
      // usersByClaim: async (req, res) => {
      //   const claimType = req.params.claim;
      //   try {
      //     await admin
      //       .auth()
      //       .listUsers()
      //       .then((listUsersResult) => {
      //         const usersWithClaim = listUsersResult.users.filter(
      //           (user) => user.customClaims && user.customClaims[claimType] === true
      //         );
      //         res.send(usersWithClaim);
      //       });
      //   } catch (error) {
      //     console.log("Error listing users:", error);
      //     res.status(500).send("Error listing users");
      //   }
      // },
      usersByClaim: async (req, res) => {
        const claimType = req.params.claim;
        try {
          const listUsersResult = await admin.auth().listUsers();
          const usersWithClaim = listUsersResult.users.filter(
            (user) => user.customClaims && user.customClaims[claimType] === true
          );
          res.send(usersWithClaim);
        } catch (error) {
          console.log("Error listing users:", error);
          res.status(500).send("Error listing users");
        }
      },
      
}
import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

async function signupUser(payload) {
    const { email, password, name } = payload;

    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    await updateProfile(user, { displayName: name });

    await signOut(auth);
}

export default signupUser;
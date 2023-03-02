import firebaseApp from './index';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const db = getFirestore(firebaseApp);
connectFirestoreEmulator(db, 'http://127.0.0.1:8080');

export default db;
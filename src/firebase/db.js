import firebaseApp from './index';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export default db;
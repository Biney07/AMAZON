import admin from 'firebase-admin';

import serviceAccount from '../../credentials/fir-7d244-firebase-adminsdk-eq2yh-939ac8d17d.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin;
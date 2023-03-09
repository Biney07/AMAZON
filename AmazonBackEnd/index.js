import {
    MONGO_CONNECTION_URI,
    MONGO_DB_NAME,
    API_PORT,
    MONGO_DB_PORT
} from './config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRouter from './api/routes/contactRoute';
import dhomaRouter from './api/routes/dhomaRoute';
import dasmatRouter from './api/routes/dasmatRoute';
import userRouter from './api/routes/userRoute'
import foodRouter from './api/routes/foodRoute';
import menuRouter from './api/routes/menuRoute';
import rezervimiDhomes from './api/routes/rezervimiDhomaRoute';
mongoose.connect(`${MONGO_CONNECTION_URI}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`).then(() => {
    console.log(`Connected to mongodb on port ${MONGO_DB_PORT}`);

    const app = express();

    app.use(
        cors({
            origin: '*'
        })
    );

    const bp = require('body-parser');

    app.use(bp.json());
    
    app.use(bp.urlencoded({ extended: true }));
    

    app.use('/contacts', contactRouter);
    app.use('/dhomat', dhomaRouter);
    app.use('/dasmat', dasmatRouter);
    app.use('/users', userRouter);
    app.use('/foods', foodRouter);
    app.use('/menute', menuRouter);
    app.use('/rezervimidhomes', rezervimiDhomes)

    app.listen(API_PORT, () => {
        console.log(`Amazon listening on port: ${API_PORT}`)
    });
})
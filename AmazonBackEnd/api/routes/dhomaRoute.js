import express from 'express';
import dhomaController from '../controllers/dhomaController';

const dhomaRouter = express.Router({ mergeParams: true });

dhomaRouter.post('/', dhomaController.list);
dhomaRouter.post('/', dhomaController.create);


export default dhomaRouter;
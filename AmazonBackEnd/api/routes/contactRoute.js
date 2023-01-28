import express from 'express';
import contactController from '../controllers/contactController';

const contactRouter = express.Router({ mergeParams: true });

contactRouter.post('/', contactController.create);

export default contactRouter;
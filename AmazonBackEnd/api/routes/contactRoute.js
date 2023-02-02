import express from 'express';
import contactController from '../controllers/contactController';

const contactRouter = express.Router({ mergeParams: true });

contactRouter.get('/', contactController.list);
contactRouter.post('/', contactController.create);
contactRouter.delete('/:contactId', contactController.delete)

export default contactRouter;
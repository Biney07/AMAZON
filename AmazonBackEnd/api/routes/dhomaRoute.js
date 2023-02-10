import express from 'express';
import dhomaController from '../controllers/dhomaController';

const dhomaRouter = express.Router({ mergeParams: true });

dhomaRouter.get('/', dhomaController.list);
dhomaRouter.post('/', dhomaController.create);
dhomaRouter.delete('/:dhomaId', dhomaController.delete)

export default dhomaRouter;
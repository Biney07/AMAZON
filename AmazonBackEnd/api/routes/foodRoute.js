import express from 'express';
import foodController from '../controllers/foodController';

const foodRouter = express.Router();

foodRouter.get('/', foodController.list);
foodRouter.post('/', foodController.create);
foodRouter.delete('/:foodId', foodController.delete);
foodRouter.get('/:foodId', foodController.findById);
foodRouter.put('/:foodId', foodController.update);

export default foodRouter;

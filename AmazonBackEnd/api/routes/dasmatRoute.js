import express from 'express';
import dasmatController from '../controllers/dasmatController';

const dasmatRouter = express.Router({ mergeParams: true });

dasmatRouter.post('/', dasmatController.create);
dasmatRouter.get('/', dasmatController.list);
dasmatRouter.get('/:dasmatId', dasmatController.findById)
dasmatRouter.delete('/:dasmatId', dasmatController.delete);
dasmatRouter.put('/:dasmatId', dasmatController.update);

export default dasmatRouter;
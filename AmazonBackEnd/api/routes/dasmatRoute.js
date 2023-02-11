import express from 'express';
import dasmatController from '../controllers/dasmatController';

const dasmatRouter = express.Router({ mergeParams: true });

dasmatRouter.post('/', dasmatController.create);
dasmatRouter.get('/', dasmatController.list);

export default dasmatRouter;
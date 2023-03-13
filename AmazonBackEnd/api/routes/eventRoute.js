import express from 'express';
import eventController from '../controllers/eventController';

const eventRouter = express.Router({ mergeParams: true });

eventRouter.get('/', eventController.list);
eventRouter.post('/', eventController.create);

export default eventRouter;
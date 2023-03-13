import express from 'express';
import eventController from '../controllers/eventController';

const eventRouter = express.Router({ mergeParams: true });

eventRouter.get('/', eventController.list);
eventRouter.post('/', eventController.create);
eventRouter.delete('/:eventId', eventController.delete)

export default eventRouter;
import eventModel from "../models/eventModel";
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
import createEventSchema from '../validators/event/createEvent';

const eventController ={

    list: async(req, res) => {
        const list = await eventModel.find();
        return res.json(list);
    },

    create: async(req, res) => {
        console.log('req.body - ', req.body);
        const validationResult = createEventSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({
                    message: ReasonPhrases.NOT_FOUND,
                    error: validationResult.error.message
                });
        }
        const newEvent = new eventModel(validationResult.value);
      
        
           

            try {
                await newEvent.save();
            
                return res.json(newEvent);
            } catch (err) {
                return res.json(StatusCodes.NOT_FOUND)
                    .json({
                        message: ReasonPhrases.NOT_FOUND,
                        error: err.message
                    });
            }
        
    },


    delete: async(req, res) => {
        const eventId = req.params.eventId;

        try {
            await eventModel.deleteOne({ _id: eventId });
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR});
        }

    }

};
export default eventController;
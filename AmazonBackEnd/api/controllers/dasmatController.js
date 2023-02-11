import dasmatModel from '../models/dasmatModel';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
import createDasmatSchema from '../validators/dasmat/createDasmat';

const dasmatController = {
    list: async(req, res) => {
        const list = await dasmatModel.find();
        return res.json(list);
    },

    create: async(req, res) => {
        console.log('req.body - ', req.body);
        const validationResult = createDasmatSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({
                    message: ReasonPhrases.NOT_FOUND,
                    error: validationResult.error.message
                });
        }

    
        const newDasmat = new dasmatModel(validationResult.value);
    
        try {
            await newDasmat.save();
        
            return res.json(newDasmat);
        } catch (err) {
            return res.json(StatusCodes.NOT_FOUND)
                .json({
                    message: ReasonPhrases.NOT_FOUND,
                    error: err.message
                });
        }
    },
    delete: async(req, res) => {
        const dasmatId = req.params.dasmatId;

        try {
            await dasmatModel.deleteOne({ _id: dasmatId });
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND});
        }

    }
};


export default dasmatController;
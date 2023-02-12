import dasmatModel from '../models/dasmatModel';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
import createDasmatSchema from '../validators/dasmat/createDasmat';
import updateDasmatSchema from '../validators/dasmat/updateDasmat';

const dasmatController = {
    list: async(req, res) => {
        const list = await dasmatModel.find();
        return res.json(list);
    },

    findById: async (req, res) => {
        try {
          const dasmat = await dasmatModel.findOne({
            _id: req.params.dasmatId,
          });
    
          if (!dasmat) throw Error("Dasmat not found");
          return res.json(dasmat);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
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

    },
    update: async(req, res) => {
        console.log('req.body - ', req.body);
        const validationResult = updateDasmatSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                    error: validationResult.error.message
                })
        }
    
        try {
            await dasmatModel.updateOne({ _id: req.params.dasmatId }, req.body);
        
            const updatedDasmat = await dasmatModel.find({ _id: req.params.dasmatId });
        
            return res.json(updatedDasmat);
        } catch (err) {
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                    err: err.message
                })
        }
        
    },
};


export default dasmatController;
import dhomaModel from '../models/dhomaModel';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';


const dhomaController = {
  
    list: async(req, res) => {
        const list = await dhomaModel.find();
        return res.json(list);
    },
    create: async(req, res) => {
        console.log('req.body - ', req.body);
       
    
        const newDhome = new dhomaModel(req.body);
            await newDhome.save();
        
            return res.json(newDhome);
        
    },
    delete: async(req, res) => {
        const dhomaId = req.params.dhomaId;

        try {
            await dhomaModel.deleteOne({ _id: dhomaId });
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND});
        }

    }
};


export default dhomaController;
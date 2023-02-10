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
        
    }
};


export default dhomaController;
import dhomaModel from '../models/dhomaModel';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';


const dhomaController = {
  
    create: async(req, res) => {
        console.log('req.body - ', req.body);
       
    
        const newDhome = new dhomaModel(req.body);
            await newDhome.save();
        
            return res.json(newDhome);
        
    }
};


export default dhomaController;
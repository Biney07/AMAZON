import contactModel from '../models/contactModel';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
import createContactSchema from '../validators/contact/createContact';

const contactController = {
    list: async(req, res) => {
        const list = await contactModel.find();
        return res.json(list);
    },
    
    create: async(req, res) => {
        console.log('req.body - ', req.body);
       
    
        const newContact = new contactModel(req.body);
            await newContact.save();
        
            return res.json(newContact);
        
    },
};


export default contactController;
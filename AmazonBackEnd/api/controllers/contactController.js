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
    delete: async(req, res) => {
        const contactId = req.params.contactId;
    
        try {
            await contactModel.deleteOne({ _id: contactId });
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND});
        }
    
    }
    
};


export default contactController;
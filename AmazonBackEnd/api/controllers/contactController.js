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
        const validationResult = createContactSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({
                    message: ReasonPhrases.NOT_FOUND,
                    error: validationResult.error.message
                });
        }

    
        const newContact = new contactModel(validationResult.value);
    
        try {
            await newContact.save();
        
            return res.json(newContact);
        } catch (err) {
            return res.json(StatusCodes.NOT_FOUND)
                .json({
                    message: ReasonPhrases.NOT_FOUND,
                    error: err.message
                });
        }
        
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
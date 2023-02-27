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
    findById: async (req, res) => {
        try {
          const dhomat = await dhomaModel.findOne({
            _id: req.params.dhomaId,
          });

          if (!dhomat) throw Error("Dhoma nuk u gjet");
          return res.json(dhomat);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
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
import foodModel from '../models/foodModel';
import createFoodSchema from '../validators/food/foodValidation'
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
const foodController = {
  list: async (req, res) => {
    const foods = await foodModel.find();
    return res.json(foods);
  },
create: async (req, res) => {
  try {
    const { value: foodData, error } = createFoodSchema.validate(req.body);
    if (error) {
      throw new Error(`Validation error: ${error.message}`);
    }
    const newFood = new foodModel(foodData);
    await newFood.save();
    return res.json(newFood);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: error.message });
  }
},



  findById: async (req, res) => {
     try {
          const foods = await foodModel.findOne({
            _id: req.params.foodId,
          });

          if (!foods) throw Error("Food was not found");
          return res.json(foods);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
      },

  update: async (req, res) => {
  
      const { value: foodData, error } = createFoodSchema.validate(req.body);
    if (error) {
      throw new Error(`Validation error: ${error.message}`);
    }

     

      try {
        
          await foodModel.updateOne({ _id: req.params.foodId }, foodData);

          const updatedFood = await foodModel.find({ _id: req.params.foodId });

          return res.json(updatedFood);
      } catch (err) {
          return res
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
              .json({
                  message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                  err: err.message
              })
      }

  },


     delete: async(req, res) => {
     
        const foodId = req.params.foodId;


        try {
            await foodModel.deleteOne({ _id: foodId });
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND});
        }

    },
};

export default foodController;

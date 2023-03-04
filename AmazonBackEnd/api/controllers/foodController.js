import foodModel from '../models/foodModel';
import createFoodSchema from '../validators/food/foodValidation'
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
      const foodModel = await foodModel.findById(req.params.foodId);
      if (!foodModel) throw Error("foodModel not found");
      return res.json(foodModel);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
          // Validate the request body against the schema
    const { error, value } = validateFood.validate(req.body);
    if (error) {
      // Return a 400 Bad Request response if the request body is invalid
      return res.status(400).json({ error: error.message });
    }
      const foodModel = await foodModel.findByIdAndUpdate(req.params.foodId, req.body, { new: true });
      if (!foodModel) throw Error("foodModel not found");
      return res.json(foodModel);
  
  } catch (error) {
    // Return a 500 Internal Server Error response if there's an error
    return res.status(500).json({ error: error.message });
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

const Joi = require('joi');

const createFoodSchema = Joi.object({
  _id: Joi.string().allow(),
  name: Joi.string().required(),
  category: Joi.string().valid('appetizers', 'main dish', 'dessert').required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
  status: Joi.boolean().default(true).required(),
  __v: Joi.allow()
});

export default createFoodSchema;
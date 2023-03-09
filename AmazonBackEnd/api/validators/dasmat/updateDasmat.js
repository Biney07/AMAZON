import Joi from 'joi';

const updateDasmatSchema = Joi.object({
    _id: Joi.string().allow(),
    numri:Joi.number().required().min(0).max(300),
    numriMusafireve:Joi.number().required().min(0).max(300),
    foto: Joi.string().required().min(8).max(200),
    __v: Joi.allow()
});

export default updateDasmatSchema;
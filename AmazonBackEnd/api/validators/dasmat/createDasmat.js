import Joi from 'joi';

const createDasmatSchema = Joi.object({
    numri:Joi.number().required().min(0).max(300),
    numriMusafireve:Joi.number().required().min(0).max(300),
    foto: Joi.string().required().min(8).max(200),
});

export default createDasmatSchema;
import Joi from 'joi';

const createDhomaSchema = Joi.object({
    numri:Joi.number().required().min(0).max(300),
    pershkrimi: Joi.string().required().min(3).max(200),
    foto1: Joi.string().required().min(3).max(200),
    foto2: Joi.string().required().min(3).max(200),
    foto3: Joi.string().required().min(3).max(200),
    cmimi:Joi.number().required().min(0).max(300),
    statusi: Joi.boolean().required()
});

export default createDhomaSchema;
import Joi from 'joi';

const updateDhomaSchema = Joi.object({
    _id: Joi.string().allow(),
    numri:Joi.number().required().min(0).max(300),
    pershkrimi: Joi.string().required().min(3).max(200),
    foto1: Joi.string().required().min(3).max(200),
    foto2: Joi.string().required().min(3).max(200),
    foto3: Joi.string().required().min(3).max(200),
    cmimi:Joi.number().required().min(0).max(300),
    statusi: Joi.boolean().required(),
    __v: Joi.allow()
});

export default updateDhomaSchema;
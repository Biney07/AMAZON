import Joi from 'joi';

const updateDasmatSchema = Joi.object({
    _id: Joi.string().allow(),
    emri: Joi.string().required().min(4).max(100),
    qyteti: Joi.string().required().min(3).max(25),
    adresa: Joi.string().required().min(6).max(200),
    foto: Joi.string().required().min(8).max(200),
    __v: Joi.allow()
});

export default updateDasmatSchema;
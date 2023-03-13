import Joi from 'joi';

const createEventSchema = Joi.object({
    title:Joi.number().required().min(0).max(300),
    description: Joi.string().required().min(3).max(200),
    photo: Joi.string().required().min(3).max(200),
    location: Joi.string().required().min(3).max(200),
    starttime: Joi.string().required().min(3).max(200),
    date:Joi.date().required(),
});

export default createEventSchema;
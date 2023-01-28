import Joi from 'joi';

const createContactSchema = Joi.object({
    emri: Joi.string().required().min(4).max(25),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    mesazhi: Joi.string().required().min(3).max(200),
});

export default createContactSchema;
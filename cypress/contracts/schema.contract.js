import Joi from "joi";

const welcomeSchema = Joi.object({
  message: Joi.string().required().allow(""),
});

const statusSchema = Joi.object({
  status: Joi.string().required().allow(""),
});

const booksSchema = Joi.object({
  id: Joi.string().required().allow(""),
  name: Joi.string().required().allow(""),
  type: Joi.string().required().allow(""),
  available: Joi.boolean().required().allow(""),
});

export default { welcomeSchema, statusSchema, booksSchema };

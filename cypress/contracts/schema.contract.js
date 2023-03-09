import Joi from "joi";

const testSchema = Joi.object({
  message: Joi.string().required().allow(""),
});

export default { testSchema };

const Joi = require("joi");

module.exports.datasetSchema = Joi.object({
    datasets: Joi.object({
        nama: Joi.string().required()
    }).required()
});
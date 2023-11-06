const ExampleService = require("@services/ExampleService");
const express = require("express")
const Joi = require('joi');


class ExampleController {
    /**
     * 
     * @param {express.Request} request 
     * @param {express.Response} response 
     */
    static get(request, response) {
        const { query } = request
        const schema = Joi.object(
            {
                id: Joi.string().required()
            }
        )

        //Validation request
        schema.validate(query)

        ExampleService.get().send(response)
    }
}

module.exports = ExampleController
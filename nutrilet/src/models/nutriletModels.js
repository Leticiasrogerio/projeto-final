const mongoose = require("mongoose")

const nutriletSchema = mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },

        nome: {
            type: String,
            require: true, 
            unique: true, 
        },

        idade: {
            type: String,
            require: true,
        },

        peso: {
            type: String,
            require: true,
        },

        altura: {
            type: String,
            require: true,
        },

        imc: { 
            type: String,
            require: true,
        },

        classificacaoImc: {
            type: String,
            require: true,
        },   
    },
);

const Model = mongoose.model("nutrilet", nutriletSchema)

module.exports = Model 
const {checkSchema} = require('express-validator')

module.exports = {
    signup: checkSchema({
        name:{
            trim: true,
            notEmpty: true,
            isLength: {
                options:{min: 3}
            },
            errorMessage: 'Nome precisa ter pelo menos 3 caracteres'
        },
        email:{
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail invalido'
        },
        password:{
            notEmpty: true,
            isLength: {
                options:{
                    min: 3
                },
                errorMessage: 'Senha precisa de pelo menos 3 caracteres'
            }
        },
        state:{
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        }
    })
}
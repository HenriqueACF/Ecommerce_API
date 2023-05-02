const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {validationResult, matchedData} = require('express-validator')
const User = require('../models/User')
const State = require('../models/State')

module.exports = {
    signin: async(req,res)=>{

    },
    signup: async(req,res)=>{
       const  errors = validationResult(req)
        if(!errors.isEmpty()){
            res.json({error: errors.mapped()})
            return
        }
        const data = matchedData(req)

        // verifica existencia de email
        const user = await User.findOne({
            email: data.email,
        })
        if(user){
            res.json({
                error:{email:{msg: 'E-mail já está sendo utilizado '}}
            })
            return
        }

        // verifica se o estado existe
        if(mongoose.Types.ObjectId.isValid(data.state)){
            const stateItem = await State.findById(data.state)
            if(!stateItem){
                res.json({
                    error:{state:{msg: 'Estado não existe'}}
                })
                return
            }
        } else{
            res.json({
                error:{state:{msg: 'Codigo do estado invalido'}}
            })
            return
        }

        // criar hash da senha e token
        const passwordHash = await bcrypt.hash(data.password, 10)
        const payload = (Date.now()+Math.random()).toString()
        const token = await bcrypt.hash(payload,10)

        // cria usuario
        const newUser = new User({
            name: data.name,
            email: data.email,
            passwordHash,
            token,
            state: data.state
        })
        await newUser.save()

        res.json({token})

        res.json({tudocerto:true, data})
    }
}
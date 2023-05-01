const States = require('../models/State')

module.exports = {
    getStates: async(req, res)=>{
        let states = await States.find()
        res.json({states})
    },
    info: async (req, res)=>{

    },
    editAction: async (req, res)=>{

    }
}
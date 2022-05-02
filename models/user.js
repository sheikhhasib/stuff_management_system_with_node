const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    'firstName' : {
        type : String
    },
    'lastName' : {
        type : String
    },
    'birthDate' : {
        type : String
    },
    'address' : {
        type : String
    },
},{
    timestamps : true,
})

module.exports = mongoose.model('User',userSchema);
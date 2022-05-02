const UserModel = require('../models/user');

module.exports = {
    createUser: async function(req, res) {
        try {
            const { firstName,lastName,birthDate,address } = req.body;
            const newUser = new UserModel({
                firstName : firstName,
                lastName : lastName,
                birthDate : birthDate,
                address : address
            })
            await newUser.save();
            res.send({
                type : "success",
                data : {
                    message: "User Created Successfully",
                    user : newUser
                } 
            })
        } catch (error) {
            res.send({
                type : "error",
                data : {
                    message : error
                }
            })
        }
    }
}
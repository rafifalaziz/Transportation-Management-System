const {generateToken, jwtExpiredSeconds} = require("../helper/auth-helper")

const models = require("../models");
const {USER} = models.init;

const login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password){
        res.status(400).send({
            success: false,
            message: 'Bad Request',
            code: 400,
          })
    }

    const user = await USER.findAll({
        where: {
            email: email
        }
    })

    if (user.length == 0){
        res.status(401).send({
            success: false,
            message: 'Unauthorized',
            code: 401,
            })
    }

    const token = generateToken(email)
    
    res.cookie("token", token, {
        maxAge: jwtExpiredSeconds * 1000
    })

    res.status(200).send({
        "token" : token
    })
}

module.exports = {
    login
}
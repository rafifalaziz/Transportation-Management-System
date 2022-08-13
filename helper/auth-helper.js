const { JsonWebTokenError } = require("jsonwebtoken")
const jsonWebToken = require("jsonwebtoken")
const models = require("../models");
const {USER} = models.init;

const jwtExpiredSeconds = 300
const access_secret_token = "MY_SECRET_TOKEN"

const generateToken = (email) => {
    const token = jsonWebToken.sign(
        { username: email },
        access_secret_token,
        {
            algorithm: "HS256",
            expiresIn: jwtExpiredSeconds
        }
    )
    
    return token
}

const authenticate = async (token) => {
    if (!token){
        return {
            success: false,
            message: 'Unauthorized',
            code: 401,
            }
    }

    var payload

    try {
        payload = jsonWebToken.verify(token, access_secret_token)
    } catch (error) {
        if (error instanceof JsonWebTokenError){
            return {
            success: false,
            message: 'Unauthorized',
            code: 401,
            }
        }

        return {
            success: false,
            message: 'Bad Request',
            code: 400,
            }
    }

    const user = await USER.findAll({
        where: {
            email: payload.username
        }
    })

    return user[0]
}

module.exports = {
    generateToken,
    jwtExpiredSeconds,
    authenticate
}
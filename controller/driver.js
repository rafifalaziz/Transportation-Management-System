const models = require("../models");

const {DRIVER} = models.init;
const {authenticate} = require("../helper/auth-helper")

const addDriver = async (req, res) => {
    try {
        const driver = await DRIVER.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat driver',
            code: 200,
            driver,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal membuat driver',
            code: 500,
            error,
        });
    }
}

const getDrivers = async (req, res) => {
    const token = req.cookies.token

    const user = await authenticate(token)

    if (user.role != "Transporter") {
        return res.status(401).send({
            success: false,
            message: 'Unauthorized',
            code: 401
        });
    }

    const drivers = await DRIVER.findAll()

    return res.status(200).send({
        "token": token,
        "message": "Success Get All Drivers Data",
        "data": drivers
    })
}

module.exports = {
    addDriver,
    getDrivers
}
const models = require("../models");

const {USER} = models.init;

exports.addUser = async (req, res) => {
    try {
        const user = await USER.create({
            email: "tes",
            password: "tes",
            role: "transporter",
        })
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat user',
            code: 200,
            user,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal membuat user',
            code: 500,
            error,
        });
    }
}
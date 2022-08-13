const models = require("../models");

const {DRIVER} = models.init;

exports.addPlate = async (req, res) => {
    try {
        const plate = await DRIVER.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat driver',
            code: 200,
            plate,
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
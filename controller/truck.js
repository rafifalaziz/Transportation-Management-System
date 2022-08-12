const models = require("../models");

const {TRUCK} = models.init;

exports.getAllTruck = async (req, res) => {
    try {
        const trucks = await TRUCK.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat truck',
            code: 200,
            user,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal membuat truck',
            code: 500,
            error,
        });
    }
}
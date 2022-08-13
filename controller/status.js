const models = require("../models");

const {STATUS} = models.init;

exports.getStatusTruck = async (req, res) => {
    try {
        const status = await STATUS.findAll({where: {
            context: "Truck"
        }});
        res.status(200).send({
            success: true,
            message: 'Berhasil mendapat status truck',
            code: 200,
            status,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal mendapat status truck',
            code: 500,
            error,
        });
    }
}

exports.getStatusDriver = async (req, res) => {
    try {
        const status = await STATUS.findAll({where: {
            context: "Driver"
        }});
        res.status(200).send({
            success: true,
            message: 'Berhasil mendapat status driver',
            code: 200,
            status,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal mendapat status driver',
            code: 500,
            error,
        });
    }
}

exports.getStatusShipment = async (req, res) => {
    try {
        const status = await STATUS.findAll({where: {
            context: "Shipment"
        }});
        res.status(200).send({
            success: true,
            message: 'Berhasil mendapat status Shipment',
            code: 200,
            status,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal mendapat status Shipment',
            code: 500,
            error,
        });
    }
}
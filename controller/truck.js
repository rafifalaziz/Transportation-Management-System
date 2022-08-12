const models = require("../models");

const {TRUCK, PLATE_TYPE, TRUCK_TYPE} = models.init;

exports.addPlate = async (req, res) => {
    try {
        const plate = await PLATE_TYPE.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat plate',
            code: 200,
            plate,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal membuat plate',
            code: 500,
            error,
        });
    }
}

exports.addTruckType = async (req, res) => {
    try {
        const truckType = await TRUCK_TYPE.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat truck type',
            code: 200,
            truckType,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal membuat truck type',
            code: 500,
            error,
        });
    }
}


exports.addTruck = async (req, res) => {
    try {
        const truck = await TRUCK.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat truck',
            code: 200,
            truck,
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

exports.editTruck = async (req, res) => {
    try {
        const truck = await TRUCK.update({...req.body}, {where: {id: req.params.id}});
        res.status(200).send({
            success: true,
            message: 'Berhasil mengedit truck',
            code: 200,
            truck,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal mengedit truck',
            code: 500,
            error,
        });
    }
}

exports.getAllTruck = async (req, res) => {
    try {
        const trucks = await TRUCK.findAll();
        res.status(200).send({
            success: true,
            message: 'Succes to get all truck',
            code: 200,
            data: trucks,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to get all truck',
            code: 500,
            error,
        });
    }
}
const req = require("express/lib/request");
const { authenticate } = require("../helper/auth-helper");
const models = require("../models");

const {SHIPMENT, STATUS} = models.init;

const addShipment = async (req, res) => {
    const token = req.cookies.token
    const {origin, destination, loading_date} = req.body

    if (!token) {
        return res.status(401).send({
            success: false,
            message: 'Unauthorized',
            code: 401
        });
    }

    if (!origin || !destination || !loading_date) {
        return res.status(400).send({
            success: false,
            message: 'Bad Request',
            code: 400
        });
    }

    const user = await authenticate(token)

    if (user.role != "Shipper") {
        return res.status(401).send({
            success: false,
            message: 'Unauthorized',
            code: 401
        });
    }

    const status = await STATUS.findAll({
        where : {
            order_no: 1,
            context: "Shipment"
        }
    })

    console.log(status[0])

    const shipment = await SHIPMENT.create({
        origin: origin,
        destination: destination,
        loading_date: loading_date,
        status_id: status[0].id
    })

    return res.status(200).send({
        "message": "Success add new shipment",
        "token": token,
        "data": shipment
    })
}

const updateShipment = async (req, res) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).send({
            "status": "Gagal",
            "code": 401,
            "message": "Unauthorized"
        })
    }

    const {truck_id, driver_id} = req.body

    if (!truck_id || !driver_id) {
        return res.status(400).send({
            success: false,
            message: 'Bad Request',
            code: 400
        });
    }

    const user = await authenticate(token)

    if (user.role != "Shipper") {
        return res.status(401).send({
            success: false,
            message: 'Unauthorized',
            code: 401
        });
    }

    const shipment = await SHIPMENT.update({ 
        truck_id: truck_id,
        driver_id: driver_id
        }, {
        where: {
          id: req.params.id
        }
      });  

      return res.status(200).send({
          "token": token,
          "message": "Success to update Shipment",
      })
    }

module.exports = {
    addShipment,
    updateShipment
}
const {authenticate} = require("../helper/auth-helper")

exports.transporterRole = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        const user = await authenticate(token);
        if(user.dataValues.role == "Transporter"){
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Bukan Transporter',
            code: 500,
            error,
        });
    }
}

exports.shipperRole = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        const user = await authenticate(token);
        
        if(user.dataValues.role == "Shipper"){
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Bukan Shipper',
            code: 500,
            error,
        });
    }
}
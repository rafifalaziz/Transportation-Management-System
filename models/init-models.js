var DataTypes = require("sequelize").DataTypes;
var _DRIVER = require("./DRIVER");
var _PLATE_TYPE = require("./PLATE_TYPE");
var _SHIPMENT = require("./SHIPMENT");
var _STATUS = require("./STATUS");
var _TRUCK = require("./TRUCK");
var _TRUCK_TYPE = require("./TRUCK_TYPE");
var _USER = require("./USER");

function initModels(sequelize) {
  var DRIVER = _DRIVER(sequelize, DataTypes);
  var PLATE_TYPE = _PLATE_TYPE(sequelize, DataTypes);
  var SHIPMENT = _SHIPMENT(sequelize, DataTypes);
  var STATUS = _STATUS(sequelize, DataTypes);
  var TRUCK = _TRUCK(sequelize, DataTypes);
  var TRUCK_TYPE = _TRUCK_TYPE(sequelize, DataTypes);
  var USER = _USER(sequelize, DataTypes);

  SHIPMENT.belongsTo(DRIVER, { as: "driver", foreignKey: "driver_id"});
  DRIVER.hasMany(SHIPMENT, { as: "shipments", foreignKey: "driver_id"});
  TRUCK.belongsTo(PLATE_TYPE, { as: "plate_type", foreignKey: "plate_type_id"});
  PLATE_TYPE.hasMany(TRUCK, { as: "trucks", foreignKey: "plate_type_id"});
  DRIVER.belongsTo(STATUS, { as: "status", foreignKey: "status_id"});
  STATUS.hasMany(DRIVER, { as: "drivers", foreignKey: "status_id"});
  SHIPMENT.belongsTo(STATUS, { as: "status", foreignKey: "status_id"});
  STATUS.hasMany(SHIPMENT, { as: "shipments", foreignKey: "status_id"});
  TRUCK.belongsTo(STATUS, { as: "status", foreignKey: "status_id"});
  STATUS.hasMany(TRUCK, { as: "trucks", foreignKey: "status_id"});
  SHIPMENT.belongsTo(TRUCK, { as: "truck", foreignKey: "truck_id"});
  TRUCK.hasMany(SHIPMENT, { as: "shipments", foreignKey: "truck_id"});
  TRUCK.belongsTo(TRUCK_TYPE, { as: "truck_type", foreignKey: "truck_type_id"});
  TRUCK_TYPE.hasMany(TRUCK, { as: "trucks", foreignKey: "truck_type_id"});

  return {
    DRIVER,
    PLATE_TYPE,
    SHIPMENT,
    STATUS,
    TRUCK,
    TRUCK_TYPE,
    USER,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SHIPMENT', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    production_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    loading_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'driver',
        key: 'id'
      }
    },
    truck_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'truck',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'shipment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "shipment_driver",
        using: "BTREE",
        fields: [
          { name: "driver_id" },
        ]
      },
      {
        name: "shipment_status",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "shipment_truck",
        using: "BTREE",
        fields: [
          { name: "truck_id" },
        ]
      },
    ]
  });
};

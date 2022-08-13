const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRUCK', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    license: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    truck_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'truck_type',
        key: 'id'
      }
    },
    plate_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plate_type',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    production_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'truck',
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
        name: "truck_plate_type",
        using: "BTREE",
        fields: [
          { name: "plate_type_id" },
        ]
      },
      {
        name: "truck_status",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "truck_truck_type",
        using: "BTREE",
        fields: [
          { name: "truck_type_id" },
        ]
      },
    ]
  });
};

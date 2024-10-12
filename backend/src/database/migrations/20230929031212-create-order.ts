'use strict';

import { DataTypes, QueryInterface, QueryOptions } from "sequelize";
import { DataBaseTableNames } from "../constants";
import { migrationWrapper } from "../transactions";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {
    await queryInterface.createTable(DataBaseTableNames.ORDER, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('new','shipping', 'complete'),
        allowNull: false
      },
      totalAmount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
      },
      orderDetailId: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: false
      },
      orderInstruction: {
        type: DataTypes.STRING,
        allowNull: false
      },
      shippingMethod: {
        type: DataTypes.STRING,
        allowNull: false
      },
      paymentScreenshot: {
        type: DataTypes.TEXT('long'),
        allowNull: true
      },
      paymentDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.dropTable(
        DataBaseTableNames.ORDER, options);
    };
    await migrationWrapper(migration);
  }
};
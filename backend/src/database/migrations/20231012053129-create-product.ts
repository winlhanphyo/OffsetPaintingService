'use strict';

import { DataTypes, ModelAttributes, QueryInterface, QueryOptions } from "sequelize";
import { DataBaseTableNames } from "../constants";
import { migrationWrapper } from "../transactions";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {
    await queryInterface.createTable(DataBaseTableNames.PRODUCT, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      printingType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      quantity: {
        type: DataTypes.JSON,
        allowNull: true
      },
      sheet: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      type: {
        type: DataTypes.JSON,
        allowNull: true
      },
      gsm: {
        type: DataTypes.JSON,
        allowNull: true
      },
      width: {
        type: DataTypes.JSON,
        allowNull: true
      },
      height: {
        type: DataTypes.JSON,
        allowNull: true
      },
      depth: {
        type: DataTypes.JSON,
        allowNull: true
      },
      ratioFullSize: {
        type: DataTypes.JSON,
        allowNull: true
      },
      ratioWidth: {
        type: DataTypes.JSON,
        allowNull: true
      },
      ratioHeight: {
        type: DataTypes.JSON,
        allowNull: true
      },
      format: {
        type: DataTypes.JSON,
        allowNull: true
      },
      colorF: {
        type: DataTypes.JSON,
        allowNull: true
      },
      colorB: {
        type: DataTypes.JSON,
        allowNull: true
      },
      lam: {
        type: DataTypes.JSON,
        allowNull: true
      },
      biType: {
        type: DataTypes.JSON,
        allowNull: true
      },
      paperPrice: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pressPrice: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lamSqPrice: {
        type: DataTypes.STRING,
        allowNull: true
      },
      dieCut: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gluding: {
        type: DataTypes.STRING,
        allowNull: true
      },
      plySet: {
        type: DataTypes.STRING,
        allowNull: true
      },
      biPrice: {
        type: DataTypes.STRING,
        allowNull: true
      },
      other: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: true
      },
      remark: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ctpPrice: {
        type: DataTypes.STRING,
        allowNull: true
      },
      waste: {
        type: DataTypes.STRING,
        allowNull: true
      },
      abbb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      updatedUserId: {
        type: DataTypes.INTEGER,
        allowNull: true
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
        DataBaseTableNames.PRODUCT, options);
    };
    await migrationWrapper(migration);
  }
};
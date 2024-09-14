'use strict';

import { QueryInterface } from "sequelize";
import { DataBaseTableNames } from "../constants";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.MEDIA,
      [
        {
          name: "Product 1",
          url: 'upload/user/product/1.png',
          status: "available",
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          name: "Product 2",
          url: 'upload/user/product/2.png',
          status: "available",
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          name: "Product 3",
          url: 'upload/user/product/3.png',
          status: "available",
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          name: "Bussiness Card 1",
          url: 'upload/user/product/bussiness1.png',
          status: "available",
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          name: "Bussiness Card 2",
          url: 'upload/user/product/bussiness2.png',
          status: "available",
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          name: "Bussiness Card 3",
          url: 'upload/user/product/bussiness3.png',
          status: "available",
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          name: "Bussiness Card 4",
          url: 'upload/user/product/bussiness4.png',
          status: "available",
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          name: "Deluxe Business Card",
          url: 'upload/user/product/deluxeBusiness1.png',
          status: "available",
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        }
      ], {});
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.MEDIA, {}, {});
  }
};

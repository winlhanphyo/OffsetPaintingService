'use strict';

import { QueryInterface } from "sequelize";

import { DataBaseTableNames } from "../constants";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.PRODUCT,
      [
        {
          name: 'Product 1',
          description: "Description",
          categoryId: 1,
          createdUserId: 1,
          createdAt: '2023-07-11',
          updatedAt: '2023-07-11'
        },
        {
          name: 'NFT',
          description: "Description",
          categoryId: 1,
          createdUserId: 1,
          createdAt: '2023-07-11',
          updatedAt: '2023-07-11'
        },
        {
          name: 'Bass',
          description: "Description",
          categoryId: 1,
          createdUserId: 1,
          createdAt: '2023-07-11',
          updatedAt: '2023-07-11'
        }
      ], {});
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.PRODUCT, {}, {});
  }
};

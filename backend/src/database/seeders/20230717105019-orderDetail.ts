'use strict';

import { QueryInterface } from "sequelize";
import { DataBaseTableNames } from "../constants";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.ORDER_DETAIL,
      [
        {
          productId: 1,
          quantity: 1,
          amount: 10000,
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          productId: 2,
          quantity: 1,
          amount: 10000,
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
      ], {});
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.ORDER_DETAIL, {}, {});
  }
};

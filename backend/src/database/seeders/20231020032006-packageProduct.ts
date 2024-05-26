'use strict';

import { QueryInterface } from "sequelize";
import { DataBaseTableNames } from "../constants";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.PACKAGE_PRODUCT,
      [
        {
          productId: 1,
          packageId: 1,
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          productId: 1,
          packageId: 2,
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
        {
          productId: 1,
          packageId: 3,
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        },
      ], {});
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.PACKAGE_PRODUCT, {}, {});
  }
};

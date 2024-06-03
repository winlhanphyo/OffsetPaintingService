'use strict';

import { QueryInterface } from "sequelize";

import { DataBaseTableNames } from "../constants";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.PACKAGE,
      [
        {
          name: 'Package1',
          description: "Description 1",
          packageImage: 'upload/user/package/1.png',
          createdUserId: 1,
          createdAt: '2023-07-11',
          updatedAt: '2023-07-11'
        },
        {
          name: 'Package2',
          description: "Description 2",
          packageImage: 'upload/user/package/2.png',
          createdUserId: 1,
          createdAt: '2023-07-11',
          updatedAt: '2023-07-11'
        },
        {
          name: 'Package3',
          description: "Description 3",
          packageImage: 'upload/user/package/3.png',
          createdUserId: 1,
          createdAt: '2023-07-11',
          updatedAt: '2023-07-11'
        }
      ], {});
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.PACKAGE, {}, {});
  }
};

'use strict';

import { QueryInterface } from "sequelize";
import { DataBaseTableNames } from "../constants";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.BANNER,
      [
        {
          createdUserId: 1,
          image: 'upload/user/banner/1.jpg',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          createdUserId: 1,
          image: 'upload/user/banner/2.jpg',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          createdUserId: 1,
          image: 'upload/user/banner/3.jpg',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          createdUserId: 1,
          image: 'upload/user/banner/4.jpg',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        }
      ], {});

  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.BANNER, {}, {});
  }
};

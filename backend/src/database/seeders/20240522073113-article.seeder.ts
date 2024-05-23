'use strict';

import { QueryInterface } from "sequelize";
import { DataBaseTableNames } from "../constants";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.ARTICLE,
      [
        {
          name: 'Article1',
          description: 'Article Description 1',
          createdUserId: 1,
          articleImage: 'upload/user/article/1.png',
          createdAt: '2025-05-18',
          updatedAt: '2025-05-18'
        },
        {
          name: 'Article2',
          description: 'Article Description 2',
          createdUserId: 1,
          articleImage: 'upload/user/article/2.png',
          createdAt: '2025-05-18',
          updatedAt: '2025-05-18'
        },
        {
          name: 'Article3',
          description: 'Article Description 3',
          createdUserId: 1,
          articleImage: 'upload/user/article/3.png',
          createdAt: '2025-05-18',
          updatedAt: '2025-05-18'
        }
      ], {});

  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.ARTICLE, {}, {});
  }
};

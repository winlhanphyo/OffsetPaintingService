'use strict';

import { QueryInterface } from "sequelize";
import { DataBaseTableNames } from "../constants";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.CATEGORY,
      [
        {
          name: 'Promotion Printing',
          createdUserId: 1,
          categoryImage: 'upload/user/category/1.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Business Cards',
          createdUserId: 1,
          categoryImage: 'upload/user/category/2.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Large Format Printing',
          createdUserId: 1,
          categoryImage: 'upload/user/category/3.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Marketing Materials',
          createdUserId: 1,
          categoryImage: 'upload/user/category/4.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Sticker',
          createdUserId: 1,
          categoryImage: 'upload/user/category/5.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },

        {
          name: 'Caution Sign Sticker',
          createdUserId: 1,
          categoryImage: 'upload/user/category/1.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'T Shirt Printing',
          createdUserId: 1,
          categoryImage: 'upload/user/category/2.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Display Standee',
          createdUserId: 1,
          categoryImage: 'upload/user/category/3.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Stickers - ReadyMade',
          createdUserId: 1,
          categoryImage: 'upload/user/category/4.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Flag',
          createdUserId: 1,
          categoryImage: 'upload/user/category/5.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },

        {
          name: 'Menu',
          createdUserId: 1,
          categoryImage: 'upload/user/category/1.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Business Stationery',
          createdUserId: 1,
          categoryImage: 'upload/user/category/2.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Canvas Print',
          createdUserId: 1,
          categoryImage: 'upload/user/category/3.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Decorative Printing',
          createdUserId: 1,
          categoryImage: 'upload/user/category/4.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Photo Print',
          createdUserId: 1,
          categoryImage: 'upload/user/category/5.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Souvenir & Gift',
          createdUserId: 1,
          categoryImage: 'upload/user/category/4.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'POP Display',
          createdUserId: 1,
          categoryImage: 'upload/user/category/5.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
        {
          name: 'Caution',
          createdUserId: 1,
          categoryImage: 'upload/user/category/caution.png',
          createdAt: '2024-05-18',
          updatedAt: '2024-05-18'
        },
      ], {});

  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.CATEGORY, {}, {});
  }
};

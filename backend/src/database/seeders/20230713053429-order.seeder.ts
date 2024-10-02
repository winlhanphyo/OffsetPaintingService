'use strict';

import { QueryInterface } from "sequelize";
import { DataBaseTableNames } from "../constants";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.ORDER,
      [
        {
          customer: 1,
          firstName: 'John',
          lastName: 'Doe',
          address: 'No (3) River Valley Rd, Singapore',
          phone: '+391234',
          status: 'new',
          totalAmount: 1000,
          orderDetailId: "[1]",
          orderInstruction: "",
          shippingMethod: "",
          paymentDone: true,
          createdAt: '2023-07-12',
          updatedAt: '2023-07-12'
        }
      ], {});
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.ORDER, {}, {});
  }
};

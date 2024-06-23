'use strict';

import { QueryInterface } from "sequelize";

import { DataBaseTableNames } from "../constants";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    return queryInterface.bulkInsert(DataBaseTableNames.PRODUCT,
      [
        {
          name: 'DTF Film for T Shirt',
          description: "Custom Design for Tshirt",
          categoryId: 1,
          createdUserId: 1,
          createdAt: '2023-07-11',
          updatedAt: '2023-07-11'
        },
        {
          name: 'Bussiness Card',
          description: "Description",
          categoryId: 2,
          createdUserId: 1,
          createdAt: '2023-07-11',
          updatedAt: '2023-07-11'
        },
        {
          name: 'Deluxe Business Card',
          description: "Deluxe Business Card - Art Card 300g စက္ကူသားပေါ်တွင်ရိုက်နှိပ်ပြီး Laminate အမှိန်နှင့်အပြောင် နှစ်မျိုးထဲမှတစ်မျိုးရွေးချယ်ခြင်းဖြင့် ပိုမိုကောင်းမွန်ကြာ ရှည်ခံသော Business Card တစ်ခု ဖန်တီးနိုင်ပါသည်။ Xenon မှအသင့်ဖန်တီးပေးထားသော နောက်ခံဒီဇိုင်းများကိုရွေးချယ်၍ သင်၏လိပ်စာကဒ်ကိုမိနစ်ပိုင်းအတွင်းဖန်တီးပေးမှာဖြစ်ပြီး ရေးသားရန်လိုအပ်သော အချက်အလက်များကိုလည်းစိတ်ကြိုက်ပြုလုပ်လို့ရပါသည်။ နောက်ဆုံးအတည်ပြု၍ မိမိတို့လုပ်ငန်း Logo ကိုထည့်သွင်းလိုက်ရုံဖြင့် အရည်အသွေးကောင်းသော လိပ်စာကဒ်ကိုရရှိစေမှာဖြစ်ပါသည်။",
          categoryId: 2,
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

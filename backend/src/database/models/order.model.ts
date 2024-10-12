import { DataTypes, Model, ModelAttributes } from "sequelize";
import { associative } from './associate.decorator';
import { DataBaseTableNames, DataBaseModelNames } from "../constants";
import { DbModelFieldInit } from "../db-structure.model";
import { db } from '../db.provider';

export interface IOrdertModel {
  id: number;
  customer: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  status: string;
  totalAmount: string;
  orderDetailId: string;
  orderInstruction: string;
  shippingMethod: string;
  paymentScreenshot: string;
  paymentDone: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const modelAttributes: DbModelFieldInit<Partial<IOrdertModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customer: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  firstName: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('new','shipping', 'complete'),
    allowNull: false,
    defaultValue: 'new'
  },
  totalAmount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false
  },
  orderDetailId: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: false
  },
  orderInstruction: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shippingMethod: {
    type: DataTypes.STRING,
    allowNull: false
  },
  paymentScreenshot: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  },
  paymentDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
};

@associative
export class OrderDbModel extends Model {
  static associate({
    UserDbModel
  }: any) {
    this.belongsTo(UserDbModel, { foreignKey: 'customer', as: 'customerData', targetKey: 'id' });
  }
}

OrderDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.ORDER,
  tableName: DataBaseTableNames.ORDER,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timestamps: true
});
import { DataTypes, Model, ModelAttributes } from "sequelize";
import { associative } from './associate.decorator';
import { DataBaseTableNames, DataBaseModelNames } from "../constants";
import { DbModelFieldInit } from "../db-structure.model";
import { db } from '../db.provider';

export interface IOrderModel {
  id: number;
  productId: number;
  designImage: string;
  quantity: number;
  productDetail: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

const modelAttributes: DbModelFieldInit<Partial<IOrderModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product',
      key: 'id'
    }
  },
  designImage: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productDetail: {
    type: DataTypes.JSON,
    allowNull: true
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
};

@associative
export class OrderDetailDbModel extends Model {
  static associate({
    ProductDbModel
  }: any) {
    this.belongsTo(ProductDbModel, { foreignKey: 'productId', as: 'productData', targetKey: 'id' });
  }
}

OrderDetailDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.ORDER_DETAIL,
  tableName: DataBaseTableNames.ORDER_DETAIL,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timestamps: true
});

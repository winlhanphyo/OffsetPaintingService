import { DataTypes, Model, ModelAttributes } from "sequelize";
import { associative } from './associate.decorator';
import { DataBaseTableNames, DataBaseModelNames } from "../constants";
import { DbModelFieldInit } from "../db-structure.model";
import { db } from '../db.provider';

export interface IBannerModel {
  id: number;
  image: string;
  createdUserId: number;
  updatedUserId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

const modelAttributes: DbModelFieldInit<Partial<IBannerModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  updatedUserId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'user',
      key: 'id'
    }
  },
};
@associative
export class BannerDbModel extends Model {
  static associate({
    UserDbModel
  }: any) {
    // this.belongsTo(UserDbModel);
    this.belongsTo(UserDbModel, { foreignKey: 'createdUserId', as: 'createdBannerByUser', targetKey: 'id' });
    this.belongsTo(UserDbModel, { foreignKey: 'updatedUserId', as: 'updatedBannerByUser', targetKey: 'id' });
  }
}

BannerDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.BANNER,
  tableName: DataBaseTableNames.BANNER,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timestamps: true
});
import { DataTypes, Model, ModelAttributes } from "sequelize";
import { associative } from './associate.decorator';
import { DataBaseTableNames, DataBaseModelNames } from "../constants";
import { DbModelFieldInit } from "../db-structure.model";
import { db } from '../db.provider';

export interface IArticleModel {
  id: number;
  name: string;
  description: string;
  articleImage: string;
  createdUserId: number;
  updatedUserId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

const modelAttributes: DbModelFieldInit<Partial<IArticleModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  articleImage: {
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
export class ArticleDbModel extends Model {
  static associate({
    UserDbModel
  }: any) {
    // this.belongsTo(UserDbModel);
    this.belongsTo(UserDbModel, { foreignKey: 'createdUserId', as: 'createdArticleByUser', targetKey: 'id' });
    this.belongsTo(UserDbModel, { foreignKey: 'updatedUserId', as: 'updatedArticleByUser', targetKey: 'id' });
  }
}

ArticleDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.ARTICLE,
  tableName: DataBaseTableNames.ARTICLE,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timestamps: true
});
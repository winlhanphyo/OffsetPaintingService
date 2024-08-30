import { DataTypes, Model, ModelAttributes } from "sequelize";
import { associative } from './associate.decorator';
import { DataBaseTableNames, DataBaseModelNames } from "../constants";
import { DbModelFieldInit } from "../db-structure.model";
import { db } from '../db.provider';

export interface IPackageProductModel {
  id: number;
  productId: number;
  packageId: number;
  createdAt: Date;
  updatedAt: Date;
}

const modelAttributes: DbModelFieldInit<Partial<IPackageProductModel>> = {
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
  packageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'package',
      key: 'id'
    }
  },
};

@associative
export class PackageProductDbModel extends Model {
  static associate({
  }: any) {
//     this.belongsTo(CategoryDbModel, { foreignKey: 'categoryId', as: 'category', targetKey: 'id' });
//     this.belongsTo(UserDbModel, { foreignKey: 'createdUserId', as: 'createdProductyByUser', targetKey: 'id' });
//     this.belongsTo(UserDbModel, { foreignKey: 'updatedUserId', as: 'updatedProductByUser', targetKey: 'id' });
  }
}

PackageProductDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.PACKAGE_PRODUCT,
  tableName: DataBaseTableNames.PACKAGE_PRODUCT,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timestamps: true
});

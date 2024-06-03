import { DataTypes, Model, ModelAttributes } from "sequelize";
import { associative } from './associate.decorator';
import { DataBaseTableNames, DataBaseModelNames } from "../constants";
import { DbModelFieldInit } from "../db-structure.model";
import { db } from '../db.provider';

export interface IPackageModel {
  id: number;
  name: string;
  packageImage: string;
  description: string;
  status: string;
  createdUserId: number;
  updatedUserId: number;
  createdAt: Date;
  updatedAt: Date;
}

const modelAttributes: DbModelFieldInit<Partial<IPackageModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  packageImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
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
export class PackageDbModel extends Model {
  static associate({
    UserDbModel,
    ProductDbModel,
    PackageProductDbModel,
    OrderDetailDbModel
  }: any) {
    this.belongsToMany(ProductDbModel, { through: PackageProductDbModel, as: 'product', foreignKey: 'packageId' });
    this.hasMany(OrderDetailDbModel, { foreignKey: 'packageId', as: 'packageData' });
    this.belongsTo(UserDbModel, { foreignKey: 'createdUserId', as: 'createdProductyByUser', targetKey: 'id' });
    this.belongsTo(UserDbModel, { foreignKey: 'updatedUserId', as: 'updatedProductByUser', targetKey: 'id' });
  }
}

PackageDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.PACKAGE,
  tableName: DataBaseTableNames.PACKAGE,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timestamps: true
});

import { DataTypes, Model, ModelAttributes } from "sequelize";
import { associative } from './associate.decorator';
import { DataBaseTableNames, DataBaseModelNames } from "../constants";
import { DbModelFieldInit } from "../db-structure.model";
import { db } from '../db.provider';

export interface IProductModel {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  printingType: string;
  quantity: string;
  sheet: string;
  type: string;
  gsm: string;
  width: string;
  height: string;
  depth: string;
  ratioFullSize: string;
  ratioWidth: string;
  ratioHeight: string;
  format: string;
  colorF: string;
  colorB: string;
  lam: string;
  biType: string;
  paperPrice: string;
  pressPrice: string;
  lamSqPrice: string;
  status: string;
  createdUserId: number;
  updatedUserId: number;
  createdAt: Date;
  updatedAt: Date;
}

const modelAttributes: DbModelFieldInit<Partial<IProductModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'category',
      key: 'id'
    }
  },
  printingType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sheet: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.JSON,
    allowNull: true
  },
  gsm: {
    type: DataTypes.JSON,
    allowNull: true
  },
  width: {
    type: DataTypes.STRING,
    allowNull: true
  },
  height: {
    type: DataTypes.STRING,
    allowNull: true
  },
  depth: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ratioFullSize: {
    type: DataTypes.JSON,
    allowNull: true
  },
  ratioWidth: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ratioHeight: {
    type: DataTypes.STRING,
    allowNull: true
  },
  format: {
    type: DataTypes.JSON,
    allowNull: true
  },
  colorF: {
    type: DataTypes.JSON,
    allowNull: true
  },
  colorB: {
    type: DataTypes.JSON,
    allowNull: true
  },
  lam: {
    type: DataTypes.JSON,
    allowNull: true
  },
  biType: {
    type: DataTypes.JSON,
    allowNull: true
  },
  paperPrice: {
    type: DataTypes.STRING,
    allowNull: true
  },
  pressPrice: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lamSqPrice: {
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
export class ProductDbModel extends Model {
  static associate({
    CategoryDbModel,
    UserDbModel,
    MediaDbModel,
    PackageDbModel,
    ProductMediaDbModel,
    PackageProductDbModel
  }: any) {
    this.belongsTo(CategoryDbModel, { foreignKey: 'categoryId', as: 'category', targetKey: 'id' });
    this.belongsToMany(MediaDbModel, { through: ProductMediaDbModel, as: 'media', foreignKey: 'productId' });
    this.belongsToMany(PackageDbModel, { through: PackageProductDbModel, as: 'package', foreignKey: 'productId' });
    this.belongsTo(UserDbModel, { foreignKey: 'createdUserId', as: 'createdProductyByUser', targetKey: 'id' });
    this.belongsTo(UserDbModel, { foreignKey: 'updatedUserId', as: 'updatedProductByUser', targetKey: 'id' });
  }
}

ProductDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.PRODUCT,
  tableName: DataBaseTableNames.PRODUCT,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timestamps: true
});

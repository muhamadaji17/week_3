import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class product extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    product_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product_category',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    image_character: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

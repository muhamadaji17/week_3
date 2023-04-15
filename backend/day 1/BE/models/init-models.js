import { Sequelize } from "sequelize"
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    pool : {
      max : 5,
      min: 0,
      idle: 10000
    }
  }
)

import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _customer from  "./customer.js";
import _order_detail from  "./order_detail.js";
import _orders from  "./orders.js";
import _product from  "./product.js";
import _product_category from  "./product_category.js";
import _users from  "./users.js";

  function initModels(sequelize) {
  const customer = _customer.init(sequelize, DataTypes);
  const order_detail = _order_detail.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const product = _product.init(sequelize, DataTypes);
  const product_category = _product_category.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  order_detail.belongsTo(orders, { as: "order", foreignKey: "orders_id"});
  orders.hasMany(order_detail, { as: "order_details", foreignKey: "orders_id"});
  order_detail.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order_detail, { as: "order_details", foreignKey: "product_id"});
  product.belongsTo(product_category, { as: "product_category", foreignKey: "product_category_id"});
  product_category.hasMany(product, { as: "products", foreignKey: "product_category_id"});
  customer.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(customer, { as: "customers", foreignKey: "users_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "users_id"});

  return {
    customer,
    order_detail,
    orders,
    product,
    product_category,
    users,
  };
}

const models = initModels(sequelize)
export default models
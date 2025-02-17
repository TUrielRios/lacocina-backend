const { Sequelize } = require("sequelize");

const config = require("./config/config");

const sequelize = new Sequelize(config.development.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
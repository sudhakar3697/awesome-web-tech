const Sequelize = require('sequelize');
const logger = require('../custom-logger');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'users.db',
  logging: (msg) => logger.debug(msg),
});

sequelize
  .authenticate()
  .then(() => {
    logger.info('users.db : Connection has been established successfully.');
  })
  .catch((err) => {
    logger.error('users.db : Unable to connect to the database:', err);
  });

const { Model } = Sequelize;
class User extends Model { }
User.init(
  {
    uid: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    pwd: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: 'users',
    timestamps: false,
    freezeTableName: true,
  },
);

sequelize.sync();

module.exports = User;

const Sequelize = require('sequelize');
const logger = require('../custom-logger');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'clips.db',
  logging: (msg) => logger.debug(msg),
});

sequelize
  .authenticate()
  .then(() => {
    logger.info('clips.db : Connection has been established successfully.');
  })
  .catch((err) => {
    logger.error('clips.db : Unable to connect to the database:', err);
  });

const { Model } = Sequelize;
class Clip extends Model { }
Clip.init(
  {
    cid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uid: {
      type: Sequelize.STRING,
    },
    cdata: {
      type: Sequelize.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'clips',
    timestamps: false,
    freezeTableName: true,
  },
);

sequelize.sync();

module.exports = Clip;

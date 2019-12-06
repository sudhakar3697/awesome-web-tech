const users = require('../models/users');
// const logger = require('../custom-logger');

module.exports = {
  addUser: (req, res) => {
    users.findOrCreate({ where: { uid: req.body.uid }, defaults: { pwd: req.body.pwd } })
      .then((i) => {
        res.status(201).send(i.toString());
      }).catch((err) => {
        res.status(400).send(err.message);
      });
  },
  deleteUser: (req, res) => {
    users.destroy({
      where: {
        uid: req.params.uid,
      },
    }).then(() => {
      res.status(200).send('Deleted');
    });
  },
  updateUser: (req, res) => {
    users.update({ pwd: req.body.pwd }, {
      where: {
        uid: req.params.uid,
      },
    }).then(() => {
      res.status(200).send('Updated');
    });
  },
  getUser: (req, res) => {
    users.findByPk(req.params.uid).then((i) => {
      res.status(200).send(JSON.stringify(i));
    }).catch((err) => {
      res.status(404).send(err.message);
    });
  },
};

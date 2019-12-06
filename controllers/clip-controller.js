const clips = require('../models/clips');
// const logger = require('../custom-logger');

module.exports = {
  addClip: (req, res) => {
    clips.create({ cid: req.body.cid, cdata: req.body.cdata })
      .then((i) => {
        res.status(201).send(i.toString());
      }).catch((err) => {
        res.status(400).send(err.message);
      });
  },
  deleteClip: (req, res) => {
    clips.destroy({
      where: {
        cid: req.params.cid,
      },
    }).then(() => {
      res.status(200).send('Deleted');
    });
  },
  updateClip: (req, res) => {
    clips.update({ cdata: req.body.cdata }, {
      where: {
        cid: req.params.cid,
      },
    }).then(() => {
      res.status(200).send('Updated');
    });
  },
  getClip: (req, res) => {
    clips.findByPk(req.params.cid).then((i) => {
      res.status(200).send(JSON.stringify(i));
    }).catch((err) => {
      res.status(404).send(err.message);
    });
  },
  getClipsByUser: (req, res) => {
    clips.findAll({ where: { uid: req.params.uid } }).then((i) => {
      res.status(200).send(JSON.stringify(i));
    }).catch((err) => {
      res.status(404).send(err.message);
    });
  },
};

const express = require('express');
const userController = require('../controllers/user-controller');
const clipController = require('../controllers/clip-controller');

const router = express.Router();

// users control
router.post('/users', (req, res) => userController.addUser(req, res));
router.get('/users/:uid', (req, res) => userController.getUser(req, res));
router.put('/users/:uid', (req, res) => userController.updateUser(req, res));
router.delete('/users/:uid', (req, res) => userController.deleteUser(req, res));

// clips control

router.post('/clips', (req, res) => clipController.addClip(req, res));
router.get('/clips/:cid', (req, res) => clipController.getClip(req, res));
router.put('/clips/:cid', (req, res) => clipController.updateClip(req, res));
router.delete('/clips/:cid', (req, res) => clipController.deleteClip(req, res));

router.get('/users/:uid/clips', (req, res) => clipController.getClipsByUser(req, res));

module.exports = router;

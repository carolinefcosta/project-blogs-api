const express = require('express');

const userController = require('../controllers/user.controller');

const validateName = require('../middlewares/validateName');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post(
  '/',
  validateName,
  validateEmail,
  validatePassword,
  userController.createUser,
  );
router.get('/', validateToken, userController.getAll);
router.get('/:id', validateToken, userController.getById);

module.exports = router;
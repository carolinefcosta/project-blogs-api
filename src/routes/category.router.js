const express = require('express');
const validateToken = require('../middlewares/validateToken');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', validateToken, categoryController.createCategory);
router.get('/', validateToken, categoryController.getAll);

module.exports = router;
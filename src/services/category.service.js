const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

const createCategory = async (name) => {
  if (!name) return { type: 400, message: '"name" is required' };

  const newCategory = await Category.create({ name });

  return { type: null, message: newCategory };
};

module.exports = {
  getAll,
  createCategory,
};
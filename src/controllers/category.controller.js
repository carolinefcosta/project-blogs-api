const service = require('../services/category.service');

const getAll = async (_req, res) => {
  const { message } = await service.getAll();

  return res.status(200).json(message);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await service.createCategory(name);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  getAll,
  createCategory,
};
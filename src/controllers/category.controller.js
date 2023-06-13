const service = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await service.createCategory(name);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  createCategory,
};
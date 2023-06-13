const service = require('../services/post.service');

const getAll = async (_req, res) => {
  const { type, message } = await service.getAll();
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  getAll,
};
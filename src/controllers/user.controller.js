const service = require('../services/user.service');

const getAll = async (req, res) => {
  const { type, message } = await service.getAll();
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await service.getById(id);

  if (type) return res.status(type).json({ message });

  return res.status(type || 200).json(message);
};

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await service.createLogin(email, password);
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await service.createUser(displayName, email, password, image);
  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  getAll,
  getById,
  createLogin,
  createUser,
};
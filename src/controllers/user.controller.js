const service = require('../services/user.service');

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await service.createLogin(email, password);
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  createLogin,
};
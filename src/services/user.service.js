const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const TYPE_400 = 400;

const createLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!email || !password) return { type: TYPE_400, message: 'Some required fields are missing' };
  if (!user || user.password !== password) return { type: TYPE_400, message: 'Invalid fields' };

  const token = createToken({
    id: user.id,
    email: user.email,
  });

  return { type: null, message: { token } };
};

module.exports = {
  createLogin,
};
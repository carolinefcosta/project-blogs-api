const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const TYPE_400 = 400;

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });

  return { type: null, message: users };
};

const findUser = async (email) => User.findOne({ where: { email } });

const createLogin = async (email, password) => {
  const user = await findUser(email);

  if (!email || !password) return { type: TYPE_400, message: 'Some required fields are missing' };
  if (!user || user.password !== password) return { type: TYPE_400, message: 'Invalid fields' };

  const token = createToken({
    id: user.id,
    email: user.email,
  });

  return { type: null, message: { token } };
};

const createUser = async (displayName, email, password, image) => {
  const verifyEmail = await findUser(email);

  if (verifyEmail) return { type: 409, message: 'User already registered' };

  const user = await User.create({ displayName, email, password, image });

  const token = createToken({
    id: user.id,
    email: user.email,
    image: user.image,
  });

  return { type: null, message: { token } };
};

module.exports = {
  getAll,
  createLogin,
  createUser,
};
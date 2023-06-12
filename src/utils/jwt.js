const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mySecret';

const createToken = (user) => {
  const token = jwt.sign({ user }, secret, { expiresIn: '1d', algorithm: 'HS256' });
  return token;
};

module.exports = {
  createToken,
};
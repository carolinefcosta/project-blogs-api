const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mySecret';

const createToken = (user) => {
  const token = jwt.sign({ user }, secret, { expiresIn: '1d', algorithm: 'HS256' });
  return token;
};

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = {
  createToken,
  verifyToken,
};
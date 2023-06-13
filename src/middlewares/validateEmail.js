const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const regex = /\S+@\S+\.\S+/;

  if (!email) {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }
  if (!regex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',  
    });
  }
  next();
};

module.exports = validateEmail;
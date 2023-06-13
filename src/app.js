const express = require('express');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');

const validateName = require('./middlewares/validateName');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const validateToken = require('./middlewares/validateToken');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
app.post('/login', userController.createLogin);
app.post(
  '/user',
  validateName,
  validateEmail,
  validatePassword,
  userController.createUser,
  );
app.get('/user', validateToken, userController.getAll);
app.get('/user/:id', validateToken, userController.getById);

app.post('/categories', validateToken, categoryController.createCategory);
app.get('/categories', validateToken, categoryController.getAll);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

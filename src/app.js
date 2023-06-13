const express = require('express');
const controller = require('./controllers/user.controller');
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
app.post('/login', controller.createLogin);
app.post(
  '/user',
  validateName,
  validateEmail,
  validatePassword,
  controller.createUser,
  );
app.get('/user', validateToken, controller.getAll);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

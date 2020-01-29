const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ message: 'Hellow World !!!' })
})

module.exports = routes;

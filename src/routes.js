import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Mauro',
    email: 'maurodesouza2017@hotmail.com',
    password_hash: '123',
  });

  return res.send({ user });
});

export default routes;

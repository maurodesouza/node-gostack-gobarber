import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const userExist = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExist) return res.json({ error: 'User already exist' });

      const { id, name, email, provider } = await User.create(req.body);

      return res.json({
        id,
        name,
        email,
        provider,
      });
    } catch (err) {
      return res.json({ error: 'Fail on create new user' });
    }
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExist = await User.findOne({ where: { email } });

      if (userExist)
        return res.status(400).json({ error: 'User already exist' });
    }

    if (oldPassword && !(await user.checkPassword(oldPassword)))
      return res.status(400).json({ error: 'Password does not match' });

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();

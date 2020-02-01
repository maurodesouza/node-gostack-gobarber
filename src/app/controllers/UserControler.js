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
}

export default new UserController();

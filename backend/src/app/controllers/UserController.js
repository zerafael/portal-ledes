import User from '../models/User';

class UserController {
  async store(request, response) {
    const { email } = request.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return response.status(401).json('E-mail do usuário já existe');
    }

    const userLogged = await User.findByPk(request.userId);

    if (!userLogged.admin) {
      return response
        .status(401)
        .json('Somente administradores podem criar usuários');
    }

    const { id, name, admin } = await User.create(request.body);

    return response.json({ id, name, email, admin });
  }
}

export default new UserController();

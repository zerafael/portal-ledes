import * as Yup from 'yup';

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

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validação falhou' });
    }

    const { email, oldPassword } = request.body;

    if (request.body.admin) {
      return response
        .status(401)
        .json({ error: 'Não é possivel alterar a permissão' });
    }

    const user = await User.findByPk(request.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return response.status(400).json({ error: 'Email já existe' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return response.status(401).json({ error: 'Senha inválida' });
    }

    await user.update(request.body);

    const { id, name, admin } = await User.findByPk(request.userId); // eslint-disable-line

    return response.json({
      id,
      name,
      email,
      admin,
    });
  }
}

export default new UserController();

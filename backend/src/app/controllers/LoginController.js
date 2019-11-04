import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

import User from '../models/User';

class LoginController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (!(await user.checkPassword(password))) {
      return response.status(401).json({ error: 'Senha invalida' });
    }

    const { id, name } = user;

    return response.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret),
    });
  }
}

export default new LoginController();

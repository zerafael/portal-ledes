import User from '../models/User';

export default async (request, response, next) => {
  const id = request.userId;

  const user = await User.findByPk(id);

  if (!user.admin) {
    return response
      .status(401)
      .json('Somente o administrador pode fazer essa ação');
  }

  request.userLogged = user;

  return next();
};

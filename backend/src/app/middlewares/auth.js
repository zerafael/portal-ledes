import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token não foi encontrado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { id } = await promisify(jwt.verify)(token, authConfig.secret);

    request.userId = id;

    return next();
  } catch (err) {
    return response.status(401).json({ error: 'Token invalido' });
  }
};

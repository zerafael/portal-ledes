import { Router } from 'express';

import LoginController from './app/controllers/LoginController';
import UserController from './app/controllers/UserController';
import NewsController from './app/controllers/NewsController';
import ProjectController from './app/controllers/ProjectController';
import RoleController from './app/controllers/RoleController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

const routes = new Router();

routes.get('/', (request, response) => {
  return response.send('Hello!');
});

// Login
routes.post('/login', LoginController.store);

routes.use(authMiddleware);

// Create user
routes.post('/users', adminMiddleware, UserController.store);
// Update user
routes.put('/users', UserController.update);

// Create news
routes.post('/news', NewsController.store);
// List news
routes.get('/news', NewsController.index);

// Create project
routes.post('/projects', adminMiddleware, ProjectController.store);

// Create role
routes.post('/roles', adminMiddleware, RoleController.store);

export default routes;

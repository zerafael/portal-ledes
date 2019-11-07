import { Router } from 'express';

import LoginController from './app/controllers/LoginController';
import UserController from './app/controllers/UserController';
import NewsController from './app/controllers/NewsController';
import ProjectController from './app/controllers/ProjectController';
import RoleController from './app/controllers/RoleController';
import MemberController from './app/controllers/MemberController';
import MemberProjectController from './app/controllers/MemberProjectController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

const routes = new Router();

routes.get('/', (request, response) => {
  return response.send('Hello!');
});

// Login
routes.post('/login', LoginController.store);

// List projects
routes.get('/projects', ProjectController.index);

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
// Update project
routes.put('/projects/:id', adminMiddleware, ProjectController.update);
// Delete project
routes.delete('/projects/:id', adminMiddleware, ProjectController.delete);

// Create role
routes.post('/roles', adminMiddleware, RoleController.store);
routes.get('/roles', adminMiddleware, RoleController.index);

// Create member
routes.post('/members', adminMiddleware, MemberController.store);
// List Members
routes.get('/members', adminMiddleware, MemberController.index);

// Add members with roles to project
routes.post(
  '/project/:id/members',
  adminMiddleware,
  MemberProjectController.store
);
// List members from a project
routes.get(
  '/project/:id/members',
  adminMiddleware,
  MemberProjectController.index
);

export default routes;

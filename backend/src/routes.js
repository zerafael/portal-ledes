import { Router } from 'express';

import LoginController from './app/controllers/LoginController';
import UserController from './app/controllers/UserController';
import NewsController from './app/controllers/NewsController';
import ProjectController from './app/controllers/ProjectController';
import RoleController from './app/controllers/RoleController';
import MemberController from './app/controllers/MemberController';
import MemberProjectController from './app/controllers/MemberProjectController';
import AboutUsController from './app/controllers/AboutUsController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';
import ContactController from './app/controllers/ContactController';

const routes = new Router();

// Login
routes.post('/login', LoginController.store);

// List projects
routes.get('/projects', ProjectController.index);

// Get about us information
routes.get('/aboutus', AboutUsController.index);

// Get contact information
routes.get('/contact', ContactController.index);

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

// Create/Update about us information
routes.post('/aboutus', AboutUsController.store);

// Create/Update contact information
routes.post('/contact', ContactController.store);

export default routes;

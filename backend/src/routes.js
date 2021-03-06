import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import LoginController from './app/controllers/LoginController';
import UserController from './app/controllers/UserController';
import NewsController from './app/controllers/NewsController';
import ProjectController from './app/controllers/ProjectController';
import RoleController from './app/controllers/RoleController';
import MemberController from './app/controllers/MemberController';
import MemberProjectController from './app/controllers/MemberProjectController';
import MemberTypeController from './app/controllers/MemberTypeController';
import AboutUsController from './app/controllers/AboutUsController';
import ContactController from './app/controllers/ContactController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

const routes = new Router();
const upload = multer(multerConfig);

// Login
routes.post('/login', LoginController.store);

// List projects
routes.get('/projects', ProjectController.index);

// List Members
routes.get('/members', MemberController.index);

// List member's types
routes.get('/types', MemberTypeController.index);

// Get about us information
routes.get('/aboutus', AboutUsController.index);

// Get contact information
routes.get('/contact', ContactController.index);

// List news
routes.get('/news', NewsController.index);

routes.use(authMiddleware);

// Create user
routes.post('/users', adminMiddleware, UserController.store);
// Update user
routes.put('/users', UserController.update);

// Create news
routes.post('/news', NewsController.store);

// Create project
routes.post('/projects', adminMiddleware, ProjectController.store);
// Update project
routes.put('/projects/:id', adminMiddleware, ProjectController.update);
// Delete project
routes.delete('/projects/:id', adminMiddleware, ProjectController.delete);

// Create role
routes.post('/roles', adminMiddleware, RoleController.store);
// List roles
routes.get('/roles', adminMiddleware, RoleController.index);

// Create member
routes.post('/members', adminMiddleware, MemberController.store);

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

// Upload file
routes.post('/files', upload.single('file'), FileController.store);

export default routes;

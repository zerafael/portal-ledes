import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) => {
  return response.send('Hello!');
});

export default routes;

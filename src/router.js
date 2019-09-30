import { Router } from 'express';
import RegionsController from './app/controllers/RegionsController';
import StatesController from './app/controllers/StatesController';
import CitysController from './app/controllers/CitysController';

const routes = new Router();

routes.get('/regions', RegionsController.show);
routes.get('/states', StatesController.show);
routes.post('/citys', CitysController.show);
routes.post('/states', StatesController.index);

export default routes;

import { Router } from 'express';
import RegionsController from './app/controllers/RegionsController';

const routes = new Router();

routes.get('/regions', RegionsController.show);

export default routes;

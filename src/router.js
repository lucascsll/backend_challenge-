import { Router } from 'express';
import Regions from './app/models/Regions';

const routes = new Router();

routes.get('/', async (req, res) => {
  const regions = await Regions.findAll({ attributes: ['regioes'] });

  return res.json(regions);
});

export default routes;

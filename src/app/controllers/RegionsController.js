import Regions from '../models/Regions';

class RegionsController {
  async show(req, res) {
    const regions = await Regions.findAll({ attributes: ['regioes'] });

    return res.json(regions);
  }
}

export default new RegionsController();

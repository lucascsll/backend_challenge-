import Regions from '../models/Regions';

class RegionsController {
  async show(req, res) {
    await Regions.sequelize
      .query(`SELECT id_regioes, regioes   FROM challenge.regions;`)
      .then(([results]) => {
        return res.json(results);
      });
  }
}

export default new RegionsController();

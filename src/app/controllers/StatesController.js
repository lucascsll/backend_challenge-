import States from '../models/States';

class StatesController {
  async show(req, res) {
    await States.sequelize
      .query(`SELECT id,uf FROM challenge.states;`)
      .then(([results]) => {
        return res.json(results);
      });
  }

  async index(req, res) {
    const { regiao } = await req.body;
    if (regiao) {
      await States.sequelize
        .query(
          `select s.uf
        from  states s inner join
        regions r on s.id_regioes=r.id_regioes
        where r.regioes='${regiao}';`
        )
        .then(([results]) => {
          return res.json(results);
        });
    }
  }
}

export default new StatesController();

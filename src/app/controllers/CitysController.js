import Citys from '../models/Citys';

class CitysController {
  async show(req, res) {
    const { regiao } = await req.body;
    const { estado } = req.body;
    const { busca } = await req.body;

    if (regiao && !estado && !busca) {
      await Citys.sequelize
        .query(
          `select m.nome_municipio  , m.id_municipio,e.uni_federacao
      from citys m inner join
      states e on m.uf=e.uf
      inner join regions r
      on r.id_regioes = e.id_regioes
      where r.regioes='${regiao}';`
        )
        .then(([results]) => {
          return res.json(results);
        });
    }
    if (regiao && estado && !busca) {
      await Citys.sequelize
        .query(
          `select m.nome_municipio  , m.id_municipio
      from citys m inner join
      states e on m.uf=e.uf
      inner join regions r
      on r.id_regioes = e.id_regioes
      where r.regioes='${regiao}' and e.uf = '${estado}' ;`
        )
        .then(([results]) => {
          return res.json(results);
        });
    }

    if (regiao && !estado && busca) {
      await Citys.sequelize
        .query(
          `select m.nome_municipio , m.id_municipio
          from citys m inner join
          states e on m.uf=e.uf
          inner join regions r
          on r.id_regioes = e.id_regioes
          where m.nome_municipio like '%${busca}%' and r.regioes='${regiao}';`
        )
        .then(([results]) => {
          return res.json(results);
        });
    }
    if (!regiao && estado && busca) {
      await Citys.sequelize
        .query(
          `select m.nome_municipio , m.id_municipio
          from citys m inner join
          states e on m.uf=e.uf
          inner join regions r
          on r.id_regioes = e.id_regioes
          where m.nome_municipio like '%${busca}%' and e.uf='${estado}';;`
        )
        .then(([results]) => {
          return res.json(results);
        });
    }
  }
}

export default new CitysController();

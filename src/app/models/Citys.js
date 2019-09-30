import Sequelize, { Model } from 'sequelize';

class Citys extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_municipio: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Citys;

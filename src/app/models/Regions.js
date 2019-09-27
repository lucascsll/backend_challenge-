import Sequelize, { Model } from 'sequelize';

class Region extends Model {
  static init(sequelize) {
    super.init(
      {
        id_regions: Sequelize.INTEGER,
        regioes: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Region;

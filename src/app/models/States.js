import Sequelize, { Model } from 'sequelize';

class State extends Model {
  static init(sequelize) {
    super.init(
      {
        uni_federacao: Sequelize.INTEGER,
        uf: Sequelize.CHAR,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default State;

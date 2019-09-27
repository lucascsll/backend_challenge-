import Sequelize from 'sequelize';
import Regions from '../app/models/Regions';
import databaseConfig from '../config/database';

const models = [Regions];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();

import Sequelize from 'sequelize';
import Regions from '../app/models/Regions';
import States from '../app/models/States';
import City from '../app/models/Citys';
import databaseConfig from '../config/database';

const models = [Regions, States, City];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    // .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

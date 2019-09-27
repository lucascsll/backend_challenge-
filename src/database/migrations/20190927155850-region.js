module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('regions', {
      id_regioes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      regioes: {
        type: Sequelize.STRING,
        unique: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('regions');
  },
};

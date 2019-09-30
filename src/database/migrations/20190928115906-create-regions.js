module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('regions', {
      id_regioes: {
        type: Sequelize.DOUBLE,
        allowNull: false,
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

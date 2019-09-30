module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('states', {
      id: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      id_uf: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      uni_federacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.UUID(2),
        allowNull: false,
        primaryKey: true,
      },
      id_regioes: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('states');
  },
};

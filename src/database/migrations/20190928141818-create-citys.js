module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('citys', {
      id: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      id_municipio: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        primaryKey: true,
      },
      nome_municipio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.UUID(2),
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('citys');
  },
};

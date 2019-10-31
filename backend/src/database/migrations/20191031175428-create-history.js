module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('history', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date_start: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      date_end: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      project: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'projects', key: 'id' },
        onUpdate: 'CASCADE',
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'roles', key: 'id' },
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('history');
  },
};

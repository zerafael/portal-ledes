module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      project: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'projects', key: 'id' },
        onUpdate: 'CASCADE',
      },
      member: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'membersRoles', key: 'id' },
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
    return queryInterface.dropTable('teams');
  },
};

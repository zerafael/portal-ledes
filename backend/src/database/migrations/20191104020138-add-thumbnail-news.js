module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('news', 'thumbnail', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('news', 'thumbnail');
  },
};

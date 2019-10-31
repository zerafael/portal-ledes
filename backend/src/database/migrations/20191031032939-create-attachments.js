module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('attachments', {
      news: {
        type: Sequelize.INTEGER,
        references: { model: 'news', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      file: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('attachments');
  },
};

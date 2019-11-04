module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('membersType', [
      {
        name: 'Bolsista',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Estagiário',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Professor',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('membersType', {
      name: { [Op.in]: ['Bolsista', 'Estagiário', 'Professor'] },
    });
  },
};

import Sequelize, { Model } from 'sequelize';

class History extends Model {
  static init(connection) {
    super.init(
      {
        date_start: Sequelize.DATE,
        date_end: Sequelize.DATE,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Project, { foreignKey: 'project' });
    this.belongsTo(models.Role, { foreignKey: 'role' });
  }
}

export default History;

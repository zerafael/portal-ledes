import { Model } from 'sequelize';

class Team extends Model {
  static init(connection) {
    super.init(
      {},
      {
        sequelize: connection,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Project, { foreignKey: 'project' });
    this.belongsTo(models.MemberRole, { foreignKey: 'member' });
  }
}

export default Team;

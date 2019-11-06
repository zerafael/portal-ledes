import { Model } from 'sequelize';

class MemberRole extends Model {
  static init(connection) {
    super.init(
      {},
      {
        sequelize: connection,
        tableName: 'membersRoles',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Member, { foreignKey: 'member' });
    this.belongsTo(models.Role, { foreignKey: 'role' });
  }
}

export default MemberRole;

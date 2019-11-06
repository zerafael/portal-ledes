import Sequelize, { Model } from 'sequelize';

class MemberType extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize: connection,
        tableName: 'membersType',
      }
    );

    return this;
  }
}

export default MemberType;

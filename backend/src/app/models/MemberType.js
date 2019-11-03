import Sequelize, { Model } from 'sequelize';

class MemberType extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }
}

export default MemberType;

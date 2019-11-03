import Sequelize, { Model } from 'sequelize';

class Member extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        course: Sequelize.STRING,
        description: Sequelize.TEXT,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.MemberType, { foreignKey: 'type' });
    this.belongsTo(models.File, { foreignKey: 'picture' });
  }
}

export default Member;

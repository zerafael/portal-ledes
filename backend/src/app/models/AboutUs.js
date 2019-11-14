import Sequelize, { Model } from 'sequelize';

class AboutUs extends Model {
  static init(connection) {
    super.init(
      {
        content: Sequelize.TEXT,
      },
      {
        sequelize: connection,
        tableName: 'aboutUs',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'image' });
  }
}

export default AboutUs;

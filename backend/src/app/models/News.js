import Sequelize, { Model } from 'sequelize';

class News extends Model {
  static init(connection) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        date: Sequelize.DATE,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'author' });
  }
}

export default News;

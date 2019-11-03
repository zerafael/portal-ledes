import { Model } from 'sequelize';

class Attachment extends Model {
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
    this.belongsTo(models.News, { foreignKey: 'news' });
    this.belongsTo(models.File, { foreignKey: 'file' });
  }
}

export default Attachment;

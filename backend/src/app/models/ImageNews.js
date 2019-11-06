import { Model } from 'sequelize';

class ImageNews extends Model {
  static init(connection) {
    super.init(
      {},
      {
        sequelize: connection,
        tableName: 'imagesNews',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.News, { foreignKey: 'news' });
    this.belongsTo(models.File, { foreignKey: 'file' });
  }
}

export default ImageNews;

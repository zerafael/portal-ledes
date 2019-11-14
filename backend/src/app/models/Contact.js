import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
  static init(connection) {
    super.init(
      {
        content: Sequelize.TEXT,
      },
      {
        sequelize: connection,
        tableName: 'contact',
      }
    );

    return this;
  }
}

export default Contact;

import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        date_start: Sequelize.DATE,
        date_end: Sequelize.DATE,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }
}

export default Project;

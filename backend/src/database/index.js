import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import News from '../app/models/News';
import Attachment from '../app/models/Attachment';
import ImageNews from '../app/models/ImageNews';
import Member from '../app/models/Member';
import MemberType from '../app/models/MemberType';
import Role from '../app/models/Role';
import MemberRole from '../app/models/MemberRole';
import Project from '../app/models/Project';
import Team from '../app/models/Team';
import History from '../app/models/History';

import databaseConfig from '../config/database';

const models = [
  User,
  File,
  News,
  Attachment,
  ImageNews,
  Member,
  MemberType,
  Role,
  MemberRole,
  Project,
  Team,
  History,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

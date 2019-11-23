import { Op } from 'sequelize';

import Team from '../models/Team';
import Project from '../models/Project';
import MemberRole from '../models/MemberRole';
import Member from '../models/Member';
import MemberType from '../models/MemberType';

import asyncForEach from '../../services/util';
import Role from '../models/Role';

class MemberProjectController {
  async index(request, response) {
    function joinObjects(element) {
      element.MemberRole.Member.setDataValue('Role', {
        name: element.MemberRole.Role.name,
      });

      return element.MemberRole.Member;
    }

    const { id: projectId } = request.params;

    const project = await Project.findByPk(projectId);

    if (!project) {
      return response.status(400).json({ error: 'Projeto não existe' });
    }

    const members = await Team.findAll({
      where: { project: { [Op.eq]: projectId } },
      include: [
        {
          model: MemberRole,

          include: [
            {
              model: Member,
              attributes: ['id', 'name', 'email', 'course', 'description'],
              include: [
                {
                  model: MemberType,
                  attributes: ['name'],
                },
              ],
            },
            {
              model: Role,
              attributes: ['name'],
            },
          ],
        },
      ],
    });

    const m = members.map(element => joinObjects(element));

    return response.json(m);
  }

  async store(request, response) {
    const { id: projectId } = request.params;
    const { members } = request.body;

    const project = await Project.findByPk(projectId);

    if (!project) {
      return response.status(400).json({ error: 'Projeto não existe' });
    }

    asyncForEach(members, async element => {
      const { id } = await MemberRole.create({
        member: element.idMember,
        role: element.idRole,
      });

      await Team.create({
        project: projectId,
        member: id,
      });
    });

    return response.send();
  }
}

export default new MemberProjectController();

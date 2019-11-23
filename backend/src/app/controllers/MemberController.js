import Member from '../models/Member';
import File from '../models/File';
import MemberType from '../models/MemberType';

class MemberController {
  async index(request, response) {
    const members = await Member.findAll({
      order: [['name', 'ASC']],
      attributes: ['id', 'name', 'email', 'course', 'description'],
      include: [
        {
          model: File,
          attributes: ['path', 'url'],
        },
        {
          model: MemberType,
          attributes: ['id', 'name'],
        },
      ],
    });

    return response.json(members);
  }

  async store(request, response) {
    // TODO: Fazer validação dos dados
    const { id } = await Member.create(request.body);

    const member = await Member.findByPk(id, {
      attributes: ['id', 'name', 'email', 'course', 'description'],
      include: [
        {
          model: File,
          as: 'picture',
          attributes: ['path', 'url'],
        },
        {
          model: MemberType,
          as: 'type',
          attributes: ['id', 'name'],
        },
      ],
    });

    return response.json(member);
  }
}

export default new MemberController();

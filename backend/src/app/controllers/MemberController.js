import Member from '../models/Member';

class MemberController {
  async index(request, response) {
    const members = await Member.findAll({ order: [['name', 'ASC']] });

    return response.json(members);
  }

  async store(request, response) {
    // TODO: Fazer validação dos dados
    const member = await Member.create(request.body);

    return response.json(member);
  }
}

export default new MemberController();

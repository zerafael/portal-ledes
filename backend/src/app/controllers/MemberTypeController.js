import MemberType from '../models/MemberType';

class MemberTypeController {
  async index(request, response) {
    const types = await MemberType.findAll({ attributes: ['id', 'name'] });

    return response.json(types);
  }
}

export default new MemberTypeController();

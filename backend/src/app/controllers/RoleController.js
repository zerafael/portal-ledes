import Role from '../models/Role';

class RoleController {
  async index(request, response) {
    const roles = await Role.findAll({
      order: [['name', 'ASC']],
      attributes: ['id', 'name'],
    });

    return response.json(roles);
  }

  async store(request, response) {
    const role = await Role.create(request.body);

    return response.json(role);
  }
}

export default new RoleController();

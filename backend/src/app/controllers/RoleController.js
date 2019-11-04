import Role from '../models/Role';

class RoleController {
  async store(request, response) {
    const role = await Role.create(request.body);

    return response.json(role);
  }
}

export default new RoleController();

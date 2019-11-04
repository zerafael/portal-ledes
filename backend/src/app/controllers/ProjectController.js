import Project from '../models/Project';

class ProjectController {
  async store(request, response) {
    const project = await Project.create(request.body);

    return response.json(project);
  }
}

export default new ProjectController();

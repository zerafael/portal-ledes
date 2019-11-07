import Project from '../models/Project';

class ProjectController {
  async index(request, response) {
    const projects = await Project.findAll();

    return response.json(projects);
  }

  async store(request, response) {
    // TODO: Fazer validaçao dos dados
    // TODO: Veificação das datas, verificar se a data de inicio já passou e se a data de fim é depois que a data de inicio
    const project = await Project.create(request.body);

    return response.json(project);
  }

  async update(request, response) {
    // TODO: Fazer validaçao dos dados
    const { id } = request.params;

    const project = await Project.findByPk(id);

    if (!project) {
      return response.status(400).json({ error: 'Projeto não existe' });
    }

    await project.update(request.body);

    return response.json(project);
  }

  async delete(request, response) {
    const { id } = request.params;

    const project = await Project.findByPk(id);

    if (!project) {
      return response.status(400).json({ error: 'Projeto não existe' });
    }

    // TODO: Ao excluir projetos, remover os membros do projeto antes
    await project.destroy();

    return response.send();
  }
}

export default new ProjectController();

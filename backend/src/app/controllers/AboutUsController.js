import AboutUs from '../models/AboutUs';

class AboutUsController {
  async index(request, response) {
    const aboutUs = await AboutUs.findAll();

    return response.json(aboutUs);
  }

  async store(request, response) {
    const { content } = request.body;

    if (!content) {
      return response.status(401).json({
        error: "É necessário enviar conteúdo para  salvar um novo 'Sobre nós'",
      });
    }

    const aboutUsOld = await AboutUs.findAll();

    const aboutUs = (await aboutUsOld)
      ? aboutUsOld.update(request.body)
      : AboutUs.create(request.body);

    return response.json(aboutUs);
  }
}

export default new AboutUsController();

import News from '../models/News';

class NewsController {
  async index(request, response) {
    const news = await News.findAll({ order: [['date', 'DESC']] });

    return response.json(news);
  }

  async store(request, response) {
    const { title, description } = request.body;
    const author = request.userId;

    // TODO: Adicionar imagens na noticia
    // TODO: Adicionar arquivos em anexo na noticia

    const news = await News.create({
      title,
      description,
      author,
      date: new Date(),
    });

    return response.json(news);
  }
}

export default new NewsController();

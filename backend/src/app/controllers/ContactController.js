import Contact from '../models/Contact';

class ContactController {
  async index(request, response) {
    const contact = await Contact.findAll();

    return response.json(contact);
  }

  async store(request, response) {
    const { content } = request.body;

    if (!content) {
      return response.status(401).json({
        error: "É necessário enviar conteúdo para  salvar o 'Contato'",
      });
    }

    const contactOld = await Contact.findAll();

    const contact = (await contactOld)
      ? contactOld.update(request.body)
      : Contact.create(request.body);

    return response.json(contact);
  }
}

export default new ContactController();

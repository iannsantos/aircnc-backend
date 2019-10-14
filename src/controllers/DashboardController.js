const Spot = require('../models/Spot');

module.exports = {
  async show(request, response) {
    const { user_id } = request.headers;

    // buscando todos os spots onde o usuário é igual ao passado no header
    const spots = await Spot.find({
      user: user_id
    });

    return response.json(spots);
  }
}
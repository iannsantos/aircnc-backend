const Booking = require('../models/Booking');

module.exports = {
  async store(request, response) {
    
    const { user_id } = request.headers;
    const { spot_id } = request.params;
    const { date } = request.body;

    const booking = await Booking.create({
      date,
      user: user_id,
      spot: spot_id
    });

    // Ao invés de retornar só o id do spot e do usuário, ele vai retornar todas as informações
    await booking.populate('spot').populate('user').execPopulate();

    return response.json(booking);

  }
}
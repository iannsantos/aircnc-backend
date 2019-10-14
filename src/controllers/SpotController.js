const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

  async index(request, response) {
    const { tech } = request.query;

    // O mongo vai fazer o match automático buscando aquela tech dentro do array de techs
    const spots = await Spot.find({
      techs: tech
    });

    return response.json(spots);
  },

  async store(request, response) {
    
    const { filename } = request.file;
    const { company, price, techs } = request.body;
    const { user_id } = request.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return response.status(400).json({
        error: "User doesn't exists"
      })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(',').map(tech => tech.trim())
    })

    return response.json(spot);
  }
}



/* 

Retorno do console.log(request.file);

{
  fieldname: 'thumbnail',
  originalname: 'eliot.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: '/media/iann/arquivos/dev/rocketseat/omnistack/aircnc/backend/uploads',
  filename: 'thumbnail-1570915288401.jpg',
  path: '/media/iann/arquivos/dev/rocketseat/omnistack/aircnc/backend/uploads/thumbnail-1570915288401.jpg',
  size: 507012
}

*/
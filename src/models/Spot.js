const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    // id do usuário
    type: mongoose.Schema.Types.ObjectId,
    // está se referindo ao model User
    ref: 'User'
  }
});

module.exports = mongoose.model('Spot', SpotSchema);

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
},
{
  // toda vez que o shema for convertido em JSON, será calculado os virtuals
  toJSON: {
    virtuals: true
  }
});

// o campo não existe no sistema, será computado pelo JS
SpotSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);

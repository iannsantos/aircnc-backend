const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    // __dirname é a pasta atual desse arquivo
    // o path.resolve vai usar as barras certas (windows \ e unix like /)
    // para retroceder a pasta uploads e para isso usa parâmetros (separando por ,)
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      // primeiro parâmetro é para erros
      // fieldname é o nome do arquivo que veio do client
      // o path.extname irá usar a extensão original do arquivo
      callback(null, `${file.originalname}-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
}
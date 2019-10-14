const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
// o multer irá utilizar as configurações criadas
const upload = multer(uploadConfig);

const UserController = require('./controllers/UserController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

routes.post('/users', UserController.store);

// é passado o single pois é uma unica imagem
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots/', SpotController.index);

routes.get('/dashboard/', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;

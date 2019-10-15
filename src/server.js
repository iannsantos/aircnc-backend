const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const mongodbUrl = require('./mongodbUrl');
const routes = require('./routes');

const app = express();

mongoose.connect(
  // use your MongoDB Atlas URL or a MongoDB localhost / docker
  mongodbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/api', routes);

app.listen(3333);

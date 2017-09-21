const express = require('express');
const path = require('path');

// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const keys = require('./config/keys');
// require('./models/purchase');

// mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI);

const app = express();

// app.use(bodyParser.json());

// require('./routes/authRoutes')(app);

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./client/webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('listening'));
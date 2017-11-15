const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const expressStaticGzip = require('express-static-gzip');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
require('./models/Purchase.js');

const app = express();

app.use(bodyParser.json());

require('./routes/twitterRoutes')(app);
require('./routes/billingRoutes')(app);

// if (process.env.NODE_ENV !== 'production') {
//   const webpackMiddleware = require('webpack-dev-middleware');
//   const webpack = require('webpack');
//   const webpackConfig = require('./client/webpack.config.js');
//   app.use(webpackMiddleware(webpack(webpackConfig)));
// } else {
//   app.use('/', expressStaticGzip('client/dist'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/dist/index.html'));
//   });
// }

// building the project each time

app.use('/', expressStaticGzip('client/dist'));
app.get('/.well-known/acme-challenge/DLBNHe726UrDunbKeXoNHqD7vcwHbkErhtnqtFz1AyE', (req, res) => {
  res.send('DLBNHe726UrDunbKeXoNHqD7vcwHbkErhtnqtFz1AyE.ySvRCyz5X1vWf6gd6f64mxvZ3OzaXyluhZRwpDEy03M');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('listening'));

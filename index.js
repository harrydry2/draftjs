const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors')
var expressStaticGzip = require("express-static-gzip");
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
require('./models/Purchase.js');

const app = express();

app.use(cors())
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*"); 
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); 
	res.header('Access-Control-Allow-Headers', 'Content-Type'); 
	next();
})

app.use(bodyParser.json());

require('./routes/twitterRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./client/webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use("/", expressStaticGzip("client/dist"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('listening'));
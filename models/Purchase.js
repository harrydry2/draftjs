const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const purchaseSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  tweetDate: {
    type: String,
  },
  tweetText: {
    type: [String],
  },
  retweets: {
    type: String,
  },
  favourites: {
    type: String,
  },
  favouritesArray: {
    type: [String],
  },
  replies: {
    type: String,
  },
  stripeEmail: {
    type: String,
  },
  stripeBillingName: {
    type: String,
  },
  stripeBillingAddressCountry: {
    type: String,
  },
  stripeBillingAddressZip: {
    type: String,
  },
  stripeBillingAddressLine1: {
    type: String,
  },
  stripeBillingAddressCity: {
    type: String,
  },
  stripeBillingAddressState: {
    type: String,
  },
  stripeShippingName: {
    type: String,
  },
  stripeShippingAddressCountry: {
    type: String,
  },
  stripeShippingAddressZip: {
    type: String,
  },
  stripeShippingAddressLine1: {
    type: String,
  },
  stripeShippingAddressCity: {
    type: String,
  },
  stripeShippingAddressState: {
    type: String,
  },
  timeOfPurchase: {
    type: String,
  },
  size: {
    type: String,
  },
  emailPrice: {
    type: String,
  },
});

module.exports = mongoose.model('Purchase', purchaseSchema);

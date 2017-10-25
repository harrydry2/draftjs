const mongoose = require('mongoose');
const Purchase = mongoose.model('Purchase');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const mail = require('../mail/mailHandler');

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
   const charge = await stripe.charges.create({
      amount: req.body.stripePrice,
      currency: 'GBP',
      description: '$5 for 5 credits',
      source: req.body.id
    });
  const postToThankYouPage = {
    date: req.body.emailDate,
    last4: charge.source.last4,
    brand: charge.source.brand,
    price: req.body.emailPrice,
    size: req.body.size,
  }

  await mail.send({
    emailTo: req.body.stripeEmail,
    emailPrice: req.body.emailPrice,
    emailSize: req.body.size,
    filename: 'emailPug',
    emailDate: req.body.emailDate,
    nameB: req.body.stripeBillingName,
    line1B: req.body.stripeBillingAddressLine1,
    cityB: req.body.stripeBillingAddressCity,
    postcodeB: req.body.stripeBillingAddressZip,
    countryB: req.body.stripeBillingAddressCountry,
    nameS: req.body.stripeShippingName,
    line1S: req.body.stripeShippingAddressLine1,
    cityS: req.body.stripeShippingAddressCity,
    postcodeS: req.body.stripeShippingAddressZip,
    countryS: req.body.stripeShippingAddressCountry,
  });
  const purchase = await (new Purchase(req.body)).save();
  res.send(postToThankYouPage);
  });
};
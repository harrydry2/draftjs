var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || 'cNqJmitBRnpwUn5LMCyYUWsdh',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'Z51Bhx0sC0uugLJMrPMX5u4PkPde2BaXCDWfPn1m1LwT7jelxt',
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '309705015-HYb9mcZRAPDCX4qJRLBdvo2Gq7mSTlaBq9nuoh1X',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '4SpADwkKYanwsloLyTpVH0ae2kqFLRtgdLuaRkcCg68p3'
});

// Fisher Yates Shuffle
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

function isArrInArr(arr, item) {
  var item_as_string = JSON.stringify(item);

  var contains = arr.some(function(ele) {
    return JSON.stringify(ele) === item_as_string;
  });
  return contains;
}

const infoObject = {}

module.exports = app => {
  app.get('/api/twitter/:username', (req, res) => {
    client.get('users/lookup', { screen_name: req.params.username })
      .then(user => {
        if (user.length) {
          infoObject.profileImage = user[0].profile_image_url_https.replace(/normal/, '400x400');
          infoObject.backgroundImage = `url('${user[0].profile_banner_url}')`;
          infoObject.verified = user[0].verified;
          infoObject.fullName = `${user[0].name}`;
          infoObject.username = req.params.username
          res.json(infoObject)
        }
      })
      .catch(err => {
        if (err) {
          infoObject.profileImage = 'https://s3.eu-west-2.amazonaws.com/lifeishappening/close.png';
          infoObject.backgroundImage = `url('https://s3.eu-west-2.amazonaws.com/lifeishappening/close.png')`;
          infoObject.verified = false;
          infoObject.fullName = `Woops!!`;
          infoObject.username = req.params.username
          res.json(infoObject)
        }
      })
  });

const favArray = []

  app.get('/api/twitterfavourites/:username', (req, res) => {
    client.get('users/lookup', { screen_name: req.params.username })
      .then(user => {
        if (user.length) {
          favArray[0] = user[0].profile_image_url_https.replace(/normal/, '400x400');
          favArray[1] = req.params.username;
        }
        res.send(favArray)
      })
      .catch(err => {
        if (err) {
          favArray[0] = 'https://s3.eu-west-2.amazonaws.com/lifeishappening/close.png';
          favArray[1] = req.params.username;
        }
        res.send(favArray)
      })
  })
}
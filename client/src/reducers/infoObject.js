// import moment from 'moment';

const initialInfoObject = {
  backgroundImage:
    "url('https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/140CanvasBackground.jpg')",
  fullName: '140 Canvas 🎉',
  username: 'ghGunning',
  profileImage:
    'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/140CanvasProfile.jpg',
  verified: true,
};

const initialTextObject = {
  editorState: ['Fuck this bitch'],
  dateAndTime: '12th',
  lines: 3,
};

const initialStatsObject = {
  footerRetweets: '1.7M',
  footerLikes: '3.8M',
  insideRetweets: '1,670,390',
  insideLikes: '3,844,290',
  favouritesArray: [
    [
      'http://pbs.twimg.com/profile_images/907721243138424832/cLPYPDvd_400x400.jpg',
      'neymarjr',
    ],
    [
      'http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png',
      'thecampaignbook',
    ],
    [
      'http://pbs.twimg.com/profile_images/910720968305152001/DUogJANZ_400x400.jpg',
      'ArianaGrande',
    ],
    [
      'http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg',
      'chris_kammy',
    ],
    [
      'http://pbs.twimg.com/profile_images/892679444799868928/lht8DtPv_400x400.jpg',
      'Cristiano',
    ],
    [
      'http://pbs.twimg.com/profile_images/868124921402150912/V0SkMhCD_400x400.jpg',
      'jeremycorbyn',
    ],
    [
      'http://pbs.twimg.com/profile_images/882405762839871488/BGcggljY_400x400.jpg',
      'JLo',
    ],
    [
      'http://pbs.twimg.com/profile_images/771885422834098176/c5_Nj8j4_400x400.jpg',
      'Oprah',
    ],
    [
      'http://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg',
      'MariaSharapova',
    ],
  ],
};

const initialReplies = {
  insideReplies: '180',
};

const initialSize = {
  size: 'Size: A1 (594 x 841 mm)',
  sumTotal: 26,
};

const initialPInfo = {
  pInfo: {
    date: null,
    last4: null,
    brand: null,
    price: null,
    size: null,
  },
};

const initialLastClicked = {
  lastClicked: 'apples',
};

const infoObject = (state = initialInfoObject, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload || false;
    default:
      return state;
  }
};

const textReducer = (state = initialTextObject, action) => {
  switch (action.type) {
    case 'TEXT_REDUCER':
      return action.payload || false;
    default:
      return state;
  }
};

const statsReducer = (state = initialStatsObject, action) => {
  switch (action.type) {
    case 'STATS_REDUCER':
      return action.payload || false;
    default:
      return state;
  }
};

const footerReducer = (state = initialReplies, action) => {
  switch (action.type) {
    case 'FOOTER_REDUCER':
      return action.payload || false;
    default:
      return state;
  }
};

const sizeReducer = (state = initialSize, action) => {
  switch (action.type) {
    case 'SIZE_REDUCER':
      return action.payload || false;
    default:
      return state;
  }
};

const pInfoReducer = (state = initialPInfo, action) => {
  switch (action.type) {
    case 'PINFO_REDUCER':
      return action.payload || false;
    default:
      return state;
  }
};

const lastClickedReducer = (state = initialLastClicked, action) => {
  switch (action.type) {
    case 'LASTCLICKED_REDUCER':
      return action.payload || false;
    default:
      return state;
  }
};

module.exports = {
  infoObject,
  textReducer,
  statsReducer,
  footerReducer,
  sizeReducer,
  pInfoReducer,
  lastClickedReducer,
};

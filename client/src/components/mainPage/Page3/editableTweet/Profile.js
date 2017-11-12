import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/index';
import axios from 'axios';
import Cross from 'svg-react-loader?name=Icon!../../../../svg/cross.svg';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '140_Canvas',
      popover: true,
      i: 0,
      favImgCounter: 0,
      favChangedCounter: 0,
      popoverHTML: [
        'This is your tweet. Change <div class="rfHandle">@140_Canvas</div> to any unique twitter handle and press enter 😜', // 0
        "Awesome! Now it's time to write up your tweet 🖋️ You can also change the date if you want 😀", // 1
        "It looks like you've entered an invalid twitter username 🚫 Please try again.", // 2
        'You\'re trying to edit the wrong field 🚫 Try editing the username below e.g. <div class="rfHandle">@140_Canvas</div>', // 3
        "To change Retweets simply edit this field and watch the number of 'Retweets' update automatically below 😎", // 4
        "To change Likes edit this field and watch the number of 'Likes' update automatically below 😁", // 5
        "To change 'favourites' type in any unqiue twitter username and press enter 🎇", // 6
        "Awesome! Looks like you've got the hang of this! The tweet autosaves so when you're ready choose your size and click Buy Now 🎁", // 7
        "It looks like you've entered an invalid twitter username. Please try again 🚫", // 8
        'You can also edit replies if you want 😀 Simply type in a new number.', // 9
        "You can't edit this! 🚫 To change Retweets edit the number in the section above and this field will update automatically", // 10
        "You can't edit this! 🚫 To change Likes edit the number in the section above and this field will update automatically", // 11
        "Write your tweet here. To include emoji's either use an emoji keyboard or copy and paste them from the web 🔥", // 12
        'Change this field to any unique twitter handle and press enter e.g. <div class="rfHandle">@RogerFederer</div>', // 13
        'You can edit the date of your tweet in this field 📅', // 14
        'This user has no profile or cover image. You might want to re-enter a new username 🚫', // 15
        'Just to warn you, this user has no profile image 😫', // 16
        'Just to warn you, this user has no background image. But not to worry, we will use a choose a default background for printing ❤️', // 17
        'This user has no profile image 😞', // 18
      ],
    };
  }

  componentDidMount() {
    this.usernameInput.value = this.state.username;
  }

  focusUsername(e) {
    this.usernameInput.focus();
    if (this.props.lastClickedReducer.lastClicked === 'topWrong') {
      this.setState({ i: 3 });
    }
    this.props.fetchLastClicked('topWrong');
  }

  popoverClose(e) {
    this.setState({ popover: false });
  }

  lastClickedTop(e) {
    this.props.fetchLastClicked('top');
  }

  componentDidUpdate() {
    if (this.props.lastClickedReducer.lastClicked === 'RT' && this.state.i !== 4) {
      this.setState({ i: 4 });
    }
    if (this.props.lastClickedReducer.lastClicked === 'FAV' && this.state.i !== 5) {
      this.setState({ i: 5 });
    }
    if (
      this.props.lastClickedReducer.lastClicked === 'FAVIMG' &&
      this.state.i !== 6 &&
      this.state.favImgCounter < 1
    ) {
      const counter = this.state.favImgCounter + 1;
      this.setState({
        i: 6,
        favImgCounter: counter,
      });
    }
    if (
      this.props.lastClickedReducer.lastClicked === 'FAVCHANGED' &&
      this.state.i !== 7 &&
      this.state.favChangedCounter < 2
    ) {
      const counter = this.state.favChangedCounter + 1;
      this.setState({
        i: 7,
        favChangedCounter: counter,
      });
    }
    if (this.props.lastClickedReducer.lastClicked === 'FAVCHANGEDFAIL' && this.state.i !== 8) {
      this.setState({ i: 8 });
    }
    if (this.props.lastClickedReducer.lastClicked === 'favNoImg' && this.state.i !== 18) {
      this.setState({ i: 18 });
    }
    if (this.props.lastClickedReducer.lastClicked === 'FREP' && this.state.i !== 9) {
      this.setState({ i: 9 });
    }
    if (this.props.lastClickedReducer.lastClicked === 'FRET' && this.state.i !== 10) {
      this.setState({ i: 10 });
    }
    if (this.props.lastClickedReducer.lastClicked === 'FLIK' && this.state.i !== 11) {
      this.setState({ i: 11 });
    }
    if (this.props.lastClickedReducer.lastClicked === 'textBox' && this.state.i !== 12) {
      this.setState({ i: 12 });
    }
    if (
      this.props.lastClickedReducer.lastClicked === 'top' &&
      this.state.i !== 13 &&
      this.state.i !== 0 &&
      this.state.i !== 1 &&
      this.state.i !== 2 &&
      this.state.i !== 15 &&
      this.state.i !== 16 &&
      this.state.i !== 17
    ) {
      this.setState({ i: 13 });
    }
    if (this.props.lastClickedReducer.lastClicked === 'date' && this.state.i !== 14) {
      this.setState({ i: 14 });
    }
  }

  async typeAhead(e) {
    const twitterLookup = e.target[0].value;
    e.preventDefault();
    this.props.fetchUser(twitterLookup);
    const res = await axios.get(`/api/twitter/${twitterLookup}`);
    if (res.data.fullName === 'Woops!!') {
      this.setState({ i: 2 });
    } else if (
      res.data.profileImage ===
        'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' &&
      res.data.backgroundImage === "url('undefined')" &&
      res.data.fullName !== 'Woops!!'
    ) {
      this.setState({ i: 15 });
    } else if (
      res.data.profileImage ===
        'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' &&
      res.data.fullName !== 'Woops!!'
    ) {
      this.setState({ i: 16 });
    } else if (res.data.backgroundImage === "url('undefined')" && res.data.fullName !== 'Woops!!') {
      this.setState({ i: 17 });
    } else {
      this.setState({ i: 1 });
    }
  }

  render() {
    const { i, popoverHTML, popover } = this.state;
    const { fullName, profileImage, verified } = this.props.infoObject;
    let display;
    if (!verified) {
      display = 'inline';
    } else {
      display = 'inline';
    }
    const userBadges = {
      display: `${display}`,
    };

    let popoverDisplay;
    if (!popover) {
      popoverDisplay = 'none';
    } else {
      popoverDisplay = 'block';
    }
    let popoverLeft;
    let popoverTop;

    // 1 lines
    if (i === 14 || i === 16 || i === 18) {
      popoverLeft = '-11.5%';
      popoverTop = '-109%';
      // 3 lines
    } else if (i === 4 || i === 7 || i === 10 || i === 11 || i === 12 || i === 17) {
      popoverLeft = '-11.5%';
      popoverTop = '-180%';
    } else {
      popoverLeft = '-11.5%';
      popoverTop = '-145%';
    }
    const popoverOuter = {
      display: `${popoverDisplay}`,
      left: `${popoverLeft}`,
      top: `${popoverTop}`,
    };
    return (
      <div className="clearFix">
        <div className="permalinkHeader">
          <div className="accountGroup">
            <div className="popoverOuter" style={popoverOuter}>
              <div className="popover" dangerouslySetInnerHTML={{ __html: popoverHTML[i] }} />
              <Cross className="popoverClose" onClick={e => this.popoverClose(e)} />
            </div>
            <img src={profileImage} className="profileImage" alt="" />
            <span className="fullNameGroup">
              <strong className="fullName" onClick={e => this.focusUsername(e)}>
                {fullName}
              </strong>
              <span className="userBadges" style={userBadges}>
                <img
                  src="https://s3.eu-west-2.amazonaws.com/lifeishappening/verification.png"
                  className="verificationIcon"
                  alt=""
                />
              </span>
            </span>
            <form
              className="search"
              onSubmit={e => this.typeAhead(e)}
              onClick={e => this.lastClickedTop(e)}
            >
              <span className="username">@</span>
              <input
                type="text"
                className="username usernameInput"
                ref={(input) => {
                  this.usernameInput = input;
                }}
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
          <div className="follorBar">
            <button className="followingButton">Following</button>
          </div>
          <div className="profileTweetAction">
            <img
              src="https://s3.eu-west-2.amazonaws.com/lifeishappening/downArrowOct.png"
              className="twitterDownArrow"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ infoObject, lastClickedReducer }) {
  return { infoObject, lastClickedReducer };
}

export default connect(mapStateToProps, actions)(Profile);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/index';
import axios from 'axios';
import { mathsville } from '../../../../helpers';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insideRetweets: '1,670,390',
      insideLikes: '3,844,290',
      footerRetweets: '1.7M',
      footerLikes: '5.8M',
      favourites: [
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/adele.jpg',
          'French Motana',
        ],
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/leoDiCaprio.jpg',
          'LeoDiCaprio',
        ],
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/edSheeran.jpg',
          'edsheeran',
        ],
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/theRock.jpg',
          'TheRock',
        ],
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/rihanna.jpg',
          'rihanna',
        ],
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/barackObama.jpg',
          'BarackObama',
        ],
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/chanceTheRapper.jpg',
          'chancetherapper',
        ],
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/elonMusk.jpg',
          'elonmusk',
        ],
        [
          'https://s3.eu-west-2.amazonaws.com/lifeishappening/originalImg/beyonce.jpg',
          'Beyonce',
        ],
      ],
      lastHovered: 0,
      hover: false,
      rtLength: 9,
      favLength: 9,
    };
  }
  onChangeRetweets(e) {
    const justNumbers = e.target.value.replace(/[^0-9]/g, '');
    const retweetsForFooter = mathsville(justNumbers);
    this.setState({
      footerRetweets: retweetsForFooter,
    });
    const commasInserted = new Intl.NumberFormat().format(justNumbers);
    this.setState({
      insideRetweets: commasInserted,
    });
  }

  onChangeLikes(e) {
    const justNumbers = e.target.value.replace(/[^0-9]/g, '');
    const likesForFooter = mathsville(justNumbers);
    this.setState({
      footerLikes: likesForFooter,
    });
    const commasInserted = new Intl.NumberFormat().format(justNumbers);
    this.setState({
      insideLikes: commasInserted,
    });
  }

  componentDidUpdate() {
    this.props.saveStatsDetails(
      this.state.footerRetweets,
      this.state.footerLikes,
      this.state.favourites,
    );
    if (this.rtRef.value) {
      const rtLength = this.rtRef.value.length;
      if (rtLength === 1 && this.state.rtLength !== 1) {
        this.setState({ rtLength: 1 });
      }
      if (rtLength === 2 && this.state.rtLength !== 2) {
        this.setState({ rtLength: 2 });
      }
      if (rtLength === 3 && this.state.rtLength !== 3) {
        this.setState({ rtLength: 3 });
      }
      if (rtLength === 5 && this.state.rtLength !== 5) {
        this.setState({ rtLength: 5 });
      }
      if (rtLength === 6 && this.state.rtLength !== 6) {
        this.setState({ rtLength: 6 });
      }
      if (rtLength === 7 && this.state.rtLength !== 7) {
        this.setState({ rtLength: 7 });
      }
      if (rtLength === 9 && this.state.rtLength !== 9) {
        this.setState({ rtLength: 9 });
      }
    }
    if (this.likesRef.value) {
      const favLength = this.likesRef.value.length;
      if (favLength === 1 && this.state.favLength !== 1) {
        this.setState({ favLength: 1 });
      }
      if (favLength === 2 && this.state.favLength !== 2) {
        this.setState({ favLength: 2 });
      }
      if (favLength === 3 && this.state.favLength !== 3) {
        this.setState({ favLength: 3 });
      }
      if (favLength === 5 && this.state.favLength !== 5) {
        this.setState({ favLength: 5 });
      }
      if (favLength === 6 && this.state.favLength !== 6) {
        this.setState({ favLength: 6 });
      }
      if (favLength === 7 && this.state.favLength !== 7) {
        this.setState({ favLength: 7 });
      }
      if (favLength === 9 && this.state.favLength !== 9) {
        this.setState({ favLength: 9 });
      }
    }
  }

  hoverOut(e, i) {
    let hoverState = this.state.hover;
    hoverState = false;
    this.setState({
      hover: hoverState,
    });
  }

  async changeFavourites(e) {
    e.preventDefault();
    const twitterLookup = e.target[0].value;
    const res = await axios.get(`/api/twitterfavourites/${twitterLookup}`);
    if (
      res.data[0] ===
      'https://s3.eu-west-2.amazonaws.com/lifeishappening/close.png'
    ) {
      this.props.fetchLastClicked('FAVCHANGEDFAIL');
    } else if (
      res.data[0] ===
      'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
    ) {
      this.props.fetchLastClicked('favNoImg');
    } else {
      this.props.fetchLastClicked('FAVCHANGED');
    }
    const favourites = this.state.favourites;
    favourites[this.state.lastHovered] = res.data;
    this.setState(favourites);
  }

  animateFavourites(e, i) {
    // translateX
    this.formSubmit.style.transform = `translateX(${i * 29}px)`;
    // change lastHovered state
    this.setState({
      lastHovered: i,
      hover: true,
    });
    this.favouriteInput.focus();
    this.favouriteInput.value = this.state.favourites[i][1];
    this.favouriteInput.placeholder = '';
    this.props.fetchLastClicked('FAVIMG');
  }

  onClick(e) {
    e.preventDefault();
    this.favouriteInput.focus();
  }

  lastClickedFAV(e) {
    this.props.fetchLastClicked('FAV');
    this.likesRef.focus();
  }

  lastClickedRT(e) {
    this.props.fetchLastClicked('RT');
    this.rtRef.focus();
  }

  render() {
    const { insideRetweets, insideLikes } = this.state;
    const { favourites } = this.state;
    const { rtLength, favLength } = this.state;
    let widthIR;
    if (rtLength === 1) widthIR = 10;
    if (rtLength === 2) widthIR = 18;
    if (rtLength === 3) widthIR = 26;
    if (rtLength === 5) widthIR = 37.5;
    if (rtLength === 6) widthIR = 46.4;
    if (rtLength === 7) widthIR = 53;
    if (rtLength === 9) widthIR = 64.5;
    const inputRetweets = {
      width: `${widthIR}px`,
    };
    let widthIL;
    if (favLength === 1) widthIL = 10;
    if (favLength === 2) widthIL = 18;
    if (favLength === 3) widthIL = 26;
    if (favLength === 5) widthIL = 37.5;
    if (favLength === 6) widthIL = 46.4;
    if (favLength === 7) widthIL = 53;
    if (favLength === 9) widthIL = 64.5;
    const inputLikes = {
      width: `${widthIL}px`,
    };
    return (
      <div className="statsContainer">
        <div className="stats">
          <li className="retweets" onClick={e => this.lastClickedRT(e)}>
            <div className="insideRetweets">
              <input
                type="text"
                maxLength="9"
                value={insideRetweets}
                onChange={e => this.onChangeRetweets(e)}
                className="retweetAndLikeNumber inputRetweets"
                style={inputRetweets}
                ref={(element) => {
                  this.rtRef = element;
                }}
              />
              Retweets
            </div>
          </li>

          <li className="likes" onClick={e => this.lastClickedFAV(e)}>
            <div className="insideLikes">
              <input
                type="text"
                maxLength="9"
                value={insideLikes}
                onChange={e => this.onChangeLikes(e)}
                className="retweetAndLikeNumber inputLikes"
                style={inputLikes}
                ref={(element) => {
                  this.likesRef = element;
                }}
              />
              Likes
            </div>
          </li>

          <li className="avatarRow">
            <div className="avatarImageOuter">
              <img
                src={favourites[0][0]}
                alt=""
                data-inner="1"
                onMouseOver={e => this.animateFavourites(e, 0)}
                onMouseLeave={e => this.hoverOut(e, 0)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <div className="avatarImageOuter">
              <img
                src={favourites[1][0]}
                alt=""
                data-inner="2"
                onMouseOver={e => this.animateFavourites(e, 1)}
                onMouseLeave={e => this.hoverOut(e, 1)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <div className="avatarImageOuter">
              <img
                src={favourites[2][0]}
                alt=""
                data-inner="3"
                onMouseOver={e => this.animateFavourites(e, 2)}
                onMouseLeave={e => this.hoverOut(e, 2)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <div className="avatarImageOuter">
              <img
                src={favourites[3][0]}
                alt=""
                data-inner="4"
                onMouseOver={e => this.animateFavourites(e, 3)}
                onMouseLeave={e => this.hoverOut(e, 3)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <div className="avatarImageOuter">
              <img
                src={favourites[4][0]}
                alt=""
                data-inner="5"
                onMouseOver={e => this.animateFavourites(e, 4)}
                onMouseLeave={e => this.hoverOut(e, 4)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <div className="avatarImageOuter">
              <img
                src={favourites[5][0]}
                alt=""
                data-inner="6"
                onMouseOver={e => this.animateFavourites(e, 5)}
                onMouseLeave={e => this.hoverOut(e, 5)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <div className="avatarImageOuter">
              <img
                src={favourites[6][0]}
                alt=""
                data-inner="7"
                onMouseOver={e => this.animateFavourites(e, 6)}
                onMouseLeave={e => this.hoverOut(e, 6)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <div className="avatarImageOuter">
              <img
                src={favourites[7][0]}
                alt=""
                data-inner="8"
                onMouseOver={e => this.animateFavourites(e, 7)}
                onMouseLeave={e => this.hoverOut(e, 7)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <div className="avatarImageOuter">
              <img
                src={favourites[8][0]}
                alt=""
                data-inner="9"
                onMouseOver={e => this.animateFavourites(e, 8)}
                onMouseLeave={e => this.hoverOut(e, 8)}
                onClick={e => this.onClick(e)}
                className="avatarImageInner"
              />
            </div>
            <form
              className={
                this.state.hover
                  ? 'favouriteSearchBox open'
                  : 'favouriteSearchBox'
              }
              ref={(input) => {
                this.formSubmit = input;
              }}
              onSubmit={e => this.changeFavourites(e)}
            >
              <span className="favouriteUsername">@</span>
              <input
                type="text"
                className="favouriteUsername favouriteUsernameHover"
                ref={(input) => {
                  this.favouriteInput = input;
                }}
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </li>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ infoObject }) {
  return { infoObject };
}

export default connect(mapStateToProps, actions)(Stats);

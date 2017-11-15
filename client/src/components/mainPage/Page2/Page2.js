import React, { Component } from 'react';
// import Video from './Video';
import CheckmarkOutline1 from 'svg-react-loader?name=Icon!../../../svg/checkmarkOutline1.svg';
import CheckmarkOutline2 from 'svg-react-loader?name=Icon!../../../svg/checkmarkOutline2.svg';
import CheckmarkOutline3 from 'svg-react-loader?name=Icon!../../../svg/checkmarkOutline3.svg';
import ScrollWatcher from 'scroll-watcher';

class Page2 extends Component {
  constructor(props) {
		super(props);
		this.state = {
			posterDisplay: 'auto',
		}
		this.playPhoneVideo = this.playPhoneVideo.bind(this);
	}


	componentDidMount() {
    const scroll = new ScrollWatcher();

    scroll.watch('#federerVideo')
      .on('enter:full', (e) => {
				e.target.play();
				if (this.video.paused === false) {
					this.setState({
						posterDisplay: 'none',
					});
				}
      })
      .on('exit:partial', (e) => {
        e.target.pause();
      });
  }


		playPhoneVideo(e){
		this.video.play();
		this.setState({
			posterDisplay: 'none',
		});
	}

  render() {
		const poster = {
      display: this.state.posterDisplay,
    };
    return (
      <div className="page2Wrapper">
        <div className="P2WrapperBackground" />
        <div className="bodyContainerp2">
          <div className="headerTextp2 gothamRM"> Make your canvas in three simple steps </div>
          <div className="actionCheckContainer">
            <CheckmarkOutline1 className="checkmarkOutline" />
            <div className="instruction gothamBook instruction1">
              Input a unique Twitter handle and press enter. e.g.{' '}
              <div className="rfHandle">@RogerFederer</div>
            </div>
          </div>
          <div className="actionCheckContainer">
            <CheckmarkOutline2 className="checkmarkOutline" />
            <div className="instruction gothamBook instruction2">
              Write up your tweet and throw in an emoji or two 😃 🚀
            </div>
          </div>
          <div className="actionCheckContainer">
            <CheckmarkOutline3 className="checkmarkOutline" />
            <div className="instruction gothamBook">
              Edit your retweets & likes. Then input a twitter handle to change favourites
            </div>
          </div>
        </div>
				<div className="federerVideoOuter">
					<video
					src="https://s3.eu-west-2.amazonaws.com/lifeishappening/promVideo.mp4"
					muted
					playsInline
					loop
					id="federerVideo"
					ref={(element) => {this.video = element;}}
					// onClick={() => (this.video.paused ? (e => this.playPhoneVideo(e)) : this.video.pause())}
					/>
					<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/draftPoster.jpg" alt="" className="poster" style={poster}/>
				</div>
      </div>
    );
  }
}
export default Page2;

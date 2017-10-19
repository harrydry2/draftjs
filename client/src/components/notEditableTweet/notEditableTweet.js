import React, { Component } from 'react';
import NotProfile from './notProfile';
import NotText from './notText';
import NotStats from './notStats';
import NotFooter from './notFooter';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

const backgroundImage = [`url("https://pbs.twimg.com/profile_banners/813286/1502508746")`, `url("https://pbs.twimg.com/profile_banners/62513246/1507128751")`, `url("https://pbs.twimg.com/profile_banners/181572333/1462042825")`, `url("https://pbs.twimg.com/profile_banners/1337785291/1487462562")`, `url("https://pbs.twimg.com/profile_banners/31239408/1461463043")`, `url("https://pbs.twimg.com/profile_banners/19230601/1500474389")`]
let index = 0;



class notEditableTweet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundImage: backgroundImage[0]
		};
	}

componentDidMount() {
  setInterval(() => {
		index === 5 ? index=0 : index++;
		this.setState({
			backgroundImage: backgroundImage[index],
		})
  }, 4800);
}

	render() {
	const {backgroundImage} = this.state;
	const backgroundImageStyle = {
	  backgroundImage,
	  height: `${318}px`
	};
	const backgroundImageContainer = {
	  height: `${318}px`
	};
	const backgroundTweet = {
	  height: `${282}px`
	};
		return (
			<div>
				<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/hangerv2.png" className="hanger" alt=""/>
				<div className="borderBox">
					<div className="backgroundImage" style={backgroundImageStyle}/>
					<div className="backgroundImageContainer" style={backgroundImageContainer}>
						<div 
							className="backgroundTweet"
							style={backgroundTweet} 
						>
							<NotProfile />
							<NotText />
							<NotStats />
							<NotFooter />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default notEditableTweet;
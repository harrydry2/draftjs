import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const fullName = ['Barack Obama', 'J.K. Rowling', 'Lil Chano From 79th', 'Roger Federer', 'BEYONCÉ', 'Sky Sports 📺']
const profileImage = ['https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg', 'https://pbs.twimg.com/profile_images/915594670272581633/obwjv8zn_400x400.jpg', 'https://pbs.twimg.com/profile_images/726486379484553216/nxNz44_J_400x400.jpg', 'https://pbs.twimg.com/profile_images/833104478328877056/8z-8v1Fw_400x400.jpg', 'https://pbs.twimg.com/profile_images/724054682579161088/3GgLeR65_400x400.jpg','https://pbs.twimg.com/profile_images/887155291284025344/nZUmdyu7_400x400.jpg' ]
const username = ['barackobama', 'jk_rowling', 'chancetherapper', 'rogerfederer', 'Beyonce', 'skysports']
const verified = [true, true, true, true, true, true]
let index = 0

class notProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: fullName[0],
			profileImage: profileImage[0],
			verified: verified[0],
			username: username[0],
		}
	}

	componentDidMount() {
	  setInterval(() => {
		index === 5 ? index=0 : index++;
	  	this.setState({
	  		fullName: fullName[index],
	  		profileImage: profileImage[index],
	  		verified: verified[index],
	  		username: username[index],
	  	})
	  }, 4800);
	}

	render() {
		const {fullName, profileImage, username, verified} = this.state;
		let display;
		if (!verified) {
			display = "none";
		} else {
			display = "inline"
		}
		const userBadges = {
		  display: `${display}`
		};
		return (
			<div>
				<div className="clearFix">
					<div className="permalinkHeader">
						<div className="accountGroup">
							<img src={profileImage} className="profileImage" alt="" />
							<span className="fullNameGroup">
								<strong className="fullName">{fullName}</strong>
								<span className="userBadges" style={userBadges}>
									<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/verification.png" className="verificationIcon" alt="" />
								</span>
							</span>
							<form className="search">
								<span className="username">@</span>
								<input type="text" className="username" placeholder="" value={username} />
							</form>
						</div>
						<div className="follorBar">
							<button>Following</button>
						</div>
						<div className="profileTweetAction">
							<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/downarrow.png" className="twitterDownArrow" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default notProfile;

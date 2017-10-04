import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const fullName = ['Barack Obama', 'J.K. Rowling', 'Oprah Winfrey', 'Roger Federer']
const profileImage = ['https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg', 'https://pbs.twimg.com/profile_images/897556072470384640/OIUnazvN_400x400.jpg', 'https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg', 'https://pbs.twimg.com/profile_images/897556072470384640/OIUnazvN_400x400.jpg']
const username = ['barackobama', 'jk_rowling', 'Oprah', 'rogerfederer']
const verified = [true, true, true, false]
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
		index === 3 ? index=0 : index++;
	  	this.setState({
	  		fullName: fullName[index],
	  		profileImage: profileImage[index],
	  		verified: verified[index],
	  		username: username[index],
	  	})
	  }, 2800);
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

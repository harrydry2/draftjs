import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/index';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'Edit This Username And Press Enter ✂️ '
		}
	}

	componentDidMount() {
		this.usernameInput.value = this.state.username;
	}

	typeAhead (e) {
		e.preventDefault();
		const twitterLookup = e.target[0].value;
		this.props.fetchUser(twitterLookup)
	}

	render() {
		const {fullName, profileImage, verified} = this.props.infoObject;
		let display;
		if (!verified) {
			display = "inline";
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
							<form className="search" onSubmit={(e) => this.typeAhead(e)}>
								<span className="username">@</span>
								<input type="text" className="username usernameInput" ref={(input) => { this.usernameInput = input; }} autoComplete="off" spellCheck="false" />
							</form>
						</div>
						<div className="follorBar">
							<button className="followingButton">Following</button>
						</div>
						<div className="profileTweetAction">
							<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/downArrowOct.png" className="twitterDownArrow" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({ infoObject }) {
  return { infoObject };
}

export default connect(mapStateToProps, actions)(Profile);

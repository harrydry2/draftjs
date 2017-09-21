import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<div>
				<div className="clearFix">
					<div className="permalinkHeader">
						<div className="accountGroup">
							<img src="http://pbs.twimg.com/profile_images/849708930213306368/8vsuutgz_normal.jpg" className="profileImage" alt="" />
							<span className="fullNameGroup">
								<strong className="fullName">Nassim Nicholas Taleb</strong>
								<span className="userBadges">
									<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/verification.png" className="verificationIcon" alt="" />
								</span>
							</span>
							<form className="search">
								<span className="username">@</span>
								<input type="text" className="username" placeholder="nntaleb" />
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
export default Profile;
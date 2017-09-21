import React, { Component } from 'react';

class Stats extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="statsContainer">
					<div className="stats">

						<li className="retweets">
							<div className="insideRetweets">
								<input type="text" placeholder="9,431" maxlength="5" className="retweetAndLikeNumber inputRetweets" />
							Retweets
							</div>
						</li>

						<li className="likes">
							<div className="insideLikes">
								<input type="text" placeholder="7,327" maxlength="5" className="retweetAndLikeNumber inputLikes" />
							Likes
							</div>
						</li>

						<li className="avatarRow">
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/608268247830564864/QgTKTWN7_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/876385108961497088/eQL7OlX3_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/816404989392211968/Wv_8ZDrX_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/825885653598666753/bZhYbrfX_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/876385108961497088/eQL7OlX3_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/777892792328531968/aRbbZcMo_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/712863751/lil-wayne-gq-2_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/799472893612593152/rBf0ZufX_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="http://pbs.twimg.com/profile_images/869800088205381633/nFD7eX2T_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
						</li>

					</div>
				</div>
			</div>
		);
	}
}
export default Stats;
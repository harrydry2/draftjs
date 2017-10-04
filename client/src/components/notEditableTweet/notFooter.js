import React, { Component } from 'react';

const insideReplies = ['6.1K', '92K', '12.9K', '20K']
const footerRetweets = ['139K', '9.8M', '321K', '890K']
const footerLikes = ['1.2M', '29M', '920K', '4.3M']
let index = 0;

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			insideReplies: insideReplies[0],
			footerRetweets: footerRetweets[0],
			footerLikes: footerLikes[0]
		}
	}

	componentDidMount() {
	  setInterval(() => {
		index === 3 ? index=0 : index++;
	  	this.setState({
	  		insideReplies: insideReplies[index],
	  		footerRetweets: footerRetweets[index],
	  		footerLikes: footerLikes[index],
	  	})
	  }, 2800);
	}

	render() {
		const {insideReplies, footerRetweets, footerLikes} = this.state;
		return (
			<div>
				<div className="streamItemFooter">
					<div className="tweetActionList">
						<div className="footerOuter">
							<div className="actionButton">
								<div className="iconContainer">
									<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/replyfaint.png" alt="" className="replyIcon" />
								</div>
								<input 
									type="text" 
									value={insideReplies}  
									className="actionCount inputReplies" 
									maxLength="4"
								/>
							</div>
						</div>

						<div className="footerOuter">
							<div className="actionButton">
								<div className="iconContainer">
									<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/retweetfaint.png" alt="" className="retweetIcon" />
								</div>
								<div className="actionCount footerRetweets">{footerRetweets}</div>
							</div>
						</div>

						<div className="footerOuter">
							<div className="actionButton">
								<div className="iconContainer">
									<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/favouritefaint.png" alt="" className="favouriteIcon" />
								</div>
								<div className="actionCount footerFavourites">{footerLikes}</div>
							</div>
						</div>

						<div className="footerOuter">
							<div className="actionButton">
								<div className="iconContainer">
									<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/dmfaint.png" alt="" className="dmIcon" />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
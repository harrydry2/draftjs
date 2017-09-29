import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import {repliesRando} from '../../helpers'

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			insideReplies: repliesRando(),
		}
	}

	onChangeReplies(e) {
		this.setState({
			insideReplies: e.target.value
		})
	}

	componentDidUpdate() {
	  this.props.saveFooterDetails(this.state.insideReplies)
	}

	render() {
		const {insideReplies} = this.state;
		const {footerRetweets, footerLikes} = this.props.statsReducer
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
									onChange={(e) => this.onChangeReplies(e)} 
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
function mapStateToProps({ statsReducer }) {
  return { statsReducer };
}

export default connect(mapStateToProps, actions)(Footer);
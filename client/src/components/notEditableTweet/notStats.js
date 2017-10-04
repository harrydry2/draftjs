import React, { Component } from 'react';

const insideRetweets = ['139,421', '9,800,000', '321,000', '890,090'];
const insideLikes = ['1,190,289', '29,431,280', '919,633', '4,287,080'];
const favourites = [
	["http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png","http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png","http://pbs.twimg.com/profile_images/910720968305152001/DUogJANZ_400x400.jpg","http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg","http://pbs.twimg.com/profile_images/892679444799868928/lht8DtPv_400x400.jpg","http://pbs.twimg.com/profile_images/868124921402150912/V0SkMhCD_400x400.jpg","http://pbs.twimg.com/profile_images/882405762839871488/BGcggljY_400x400.jpg","http://pbs.twimg.com/profile_images/771885422834098176/c5_Nj8j4_400x400.jpg","http://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg"],
	["http://pbs.twimg.com/profile_images/907721243138424832/cLPYPDvd_400x400.jpg","http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png","http://pbs.twimg.com/profile_images/910720968305152001/DUogJANZ_400x400.jpg","http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg","http://pbs.twimg.com/profile_images/892679444799868928/lht8DtPv_400x400.jpg","http://pbs.twimg.com/profile_images/868124921402150912/V0SkMhCD_400x400.jpg","http://pbs.twimg.com/profile_images/882405762839871488/BGcggljY_400x400.jpg","http://pbs.twimg.com/profile_images/771885422834098176/c5_Nj8j4_400x400.jpg","http://pbs.twimg.com/profile_images/910720968305152001/DUogJANZ_400x400.jpg"],
	["http://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg","http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png","http://pbs.twimg.com/profile_images/910720968305152001/DUogJANZ_400x400.jpg","http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg","http://pbs.twimg.com/profile_images/892679444799868928/lht8DtPv_400x400.jpg","http://pbs.twimg.com/profile_images/868124921402150912/V0SkMhCD_400x400.jpg","http://pbs.twimg.com/profile_images/882405762839871488/BGcggljY_400x400.jpg","http://pbs.twimg.com/profile_images/771885422834098176/c5_Nj8j4_400x400.jpg","http://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg"],
	["http://pbs.twimg.com/profile_images/907721243138424832/cLPYPDvd_400x400.jpg","http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png","http://pbs.twimg.com/profile_images/910720968305152001/DUogJANZ_400x400.jpg","http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg","http://pbs.twimg.com/profile_images/892679444799868928/lht8DtPv_400x400.jpg","http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg","http://pbs.twimg.com/profile_images/882405762839871488/BGcggljY_400x400.jpg","http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg","http://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg"],
]
const widthIR = [64.5, 53, 46.4, 46.4];
const widthIL = [64.5, 64.5, 53, 54.5];
let index = 0;

class notStats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			insideRetweets: insideRetweets[0],
			insideLikes: insideLikes[0],
			favourites: favourites[0],
			widthIR: widthIR[0],
			widthIL: widthIL[0],
		}
	}

	componentDidMount() {
	  setInterval(() => {
		index === 3 ? index=0 : index++;
	  	this.setState({
	  		insideRetweets: insideRetweets[index],
	  		insideLikes: insideLikes[index],
	  		favourites: favourites[index],
	  		widthIR: widthIR[index],
	  		widthIL: widthIL[index],
	  	})
	  }, 2800);
	}

	render() {
		const {insideRetweets, insideLikes, favourites, widthIR, widthIL} = this.state;
		const inputRetweets = {
		  width: `${widthIR}px`
		};
		const inputLikes = {
		  width: `${widthIL}px`
		}; 
		return (
			<div>
				<div className="statsContainer">
					<div className="stats">
						<li className="retweets">
							<div className="insideRetweets">
								<input 
									type="text" 
									maxLength="9" 
									value={insideRetweets}  
									className="retweetAndLikeNumber inputRetweets"
									style={inputRetweets}
									ref={(element) => { this.rtRef = element; }} 
								/>
							Retweets
							</div>
						</li>

						<li className="likes">
							<div className="insideLikes">
								<input type="text" maxLength="9" value={insideLikes} style={inputLikes} className="retweetAndLikeNumber inputLikes" ref={(element) => { this.likesRef = element; }} />
							Likes
							</div>
						</li>

						<li className="avatarRow">
							<div className="avatarImageOuter">
								<img src={favourites[0]} alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[1]} alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[2]} alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[3]} alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[4]} alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[5]} alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[6]} alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[7]} alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[8]} alt="" className="avatarImageInner" />
							</div>
						</li>
					</div>
				</div>
			</div>
		);
	}
}

export default notStats
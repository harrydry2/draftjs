import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import axios from 'axios';

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			insideRetweets: "1,670,390",
			insideLikes: "3,844,290",
			favourites: [
				["http://pbs.twimg.com/profile_images/907721243138424832/cLPYPDvd_400x400.jpg", "neymarjr"],
				["http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png", "thecampaignbook"],
				["http://pbs.twimg.com/profile_images/910720968305152001/DUogJANZ_400x400.jpg", "ArianaGrande"],
				["http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg", "chris_kammy"],
				["http://pbs.twimg.com/profile_images/892679444799868928/lht8DtPv_400x400.jpg", "Cristiano"],
				["http://pbs.twimg.com/profile_images/868124921402150912/V0SkMhCD_400x400.jpg", "jeremycorbyn"],
				["http://pbs.twimg.com/profile_images/882405762839871488/BGcggljY_400x400.jpg", "JLo"],
				["http://pbs.twimg.com/profile_images/771885422834098176/c5_Nj8j4_400x400.jpg", "Oprah"],
				["http://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg", "MariaSharapova"]
			],
			lastHovered: 0,
			hover: false,
			rtLength:9,
			favLength:9,
		}
	}
	onChangeRetweets(e) {
		const noCommas = e.target.value.replace(/,/g,'');
		const commasInserted = new Intl.NumberFormat().format(noCommas);
		this.setState({
			insideRetweets: commasInserted
		})
	}

	onChangeLikes(e) {
		const noCommas = e.target.value.replace(/,/g,'');
		const commasInserted = new Intl.NumberFormat().format(noCommas);
		this.setState({
			insideLikes: commasInserted
		})
	}

	componentDidUpdate() {
	  this.props.saveStatsDetails(this.state.insideRetweets, this.state.insideLikes, this.state.favourites);
	  if(this.rtRef.value) {
	  	let rtLength = this.rtRef.value.length;
	  	if (rtLength === 1 && this.state.rtLength !== 1) {
	  		this.setState({rtLength: 1})
	  	}
	  	if (rtLength === 2 && this.state.rtLength !== 2) {
	  		this.setState({rtLength: 2})
	  	}
	  	if (rtLength === 3 && this.state.rtLength !== 3) {
	  		this.setState({rtLength: 3})
	  	}
	  	if (rtLength === 5 && this.state.rtLength !== 5) {
	  		this.setState({rtLength: 5})
	  	}
	  	if (rtLength === 6 && this.state.rtLength !== 6) {
	  		this.setState({rtLength: 6})
	  	}
	  	if (rtLength === 7 && this.state.rtLength !== 7) {
	  		this.setState({rtLength: 7})
	  	}
	  	if (rtLength === 9 && this.state.rtLength !== 9) {
	  		this.setState({rtLength: 9})
	  	}
	  }
	  if(this.likesRef.value) {
	  	let favLength = this.likesRef.value.length;
	  	if (favLength === 1 && this.state.favLength !== 1) {
	  		this.setState({favLength: 1})
	  	}
	  	if (favLength === 2 && this.state.favLength !== 2) {
	  		this.setState({favLength: 2})
	  	}
	  	if (favLength === 3 && this.state.favLength !== 3) {
	  		this.setState({favLength: 3})
	  	}
	  	if (favLength === 5 && this.state.favLength !== 5) {
	  		this.setState({favLength: 5})
	  	}
	  	if (favLength === 6 && this.state.favLength !== 6) {
	  		this.setState({favLength: 6})
	  	}
	  	if (favLength === 7 && this.state.favLength !== 7) {
	  		this.setState({favLength: 7})
	  	}
	  	if (favLength === 9 && this.state.favLength !== 9) {
	  		this.setState({favLength: 9})
	  	}
	  }
	}

	animateFavourites(e, i) {
		let lastHovered = this.state.lastHovered;
		lastHovered = i;
		this.setState({
			lastHovered,
			hover: true
		});
		this.favouriteInput.focus();
		this.favouriteInput.value = '';
		this.favouriteInput.placeholder = this.state.favourites[i][1]
	}

	hoverOut(e, i) {
		let hoverState = this.state.hover
		hoverState = false
		this.setState({
			hover: hoverState
		})
	}

	async changeFavourites(e){
		e.preventDefault()
		const twitterLookup = e.target[0].value;
		const res = await axios.get(`/api/twitterfavourites/${twitterLookup}`)
		let favourites = this.state.favourites
		favourites[this.state.lastHovered] = res.data
		this.setState(favourites)
	}

	captureXY(e) {
	  if (!e.target.getAttribute('data-inner')) return;
	  const leftOfIcon = e.target.getBoundingClientRect().left * 1.3889;
	  const topOfIcon = e.target.getBoundingClientRect().top * 1.3889;
		const startingLeftValue = ((window.innerWidth - 640) / 2)
		const startingTopValue = ((window.innerHeight - 406) / 2)
	  this.formSubmit.style.transform = `translate(${leftOfIcon - startingLeftValue - 528}px, ${topOfIcon - startingTopValue + window.scrollY -118}px)`
	}

	render() {
		const {insideRetweets, insideLikes} = this.state;
		const {favourites} = this.state;
		let {rtLength, favLength} = this.state;
		let widthIR;
		if (rtLength === 1) widthIR = 10;
		if (rtLength === 2) widthIR = 18;
		if (rtLength === 3) widthIR = 26;
		if (rtLength === 5) widthIR = 37.5;
		if (rtLength === 6) widthIR = 46.4;
		if (rtLength === 7) widthIR = 53;
		if (rtLength === 9) widthIR = 64.5;
		const inputRetweets = {
		  width: `${widthIR}px`
		};
		let widthIL;
		if (favLength === 1) widthIL = 10;
		if (favLength === 2) widthIL = 18;
		if (favLength === 3) widthIL = 26;
		if (favLength === 5) widthIL = 37.5;
		if (favLength === 6) widthIL = 46.4;
		if (favLength === 7) widthIL = 53;
		if (favLength === 9) widthIL = 64.5;
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
									onChange={(e) => this.onChangeRetweets(e)} 
									className="retweetAndLikeNumber inputRetweets" 
									style={inputRetweets} 
									ref={(element) => { this.rtRef = element; }} 
								/>
							Retweets
							</div>
						</li>

						<li className="likes">
							<div className="insideLikes">
								<input type="text" maxLength="9" value={insideLikes} onChange={(e) => this.onChangeLikes(e)} className="retweetAndLikeNumber inputLikes" style={inputLikes} ref={(element) => { this.likesRef = element; }} />
							Likes
							</div>
						</li>

						<li className="avatarRow" onMouseOver={(e) => this.captureXY(e)}>
							<div className="avatarImageOuter">
								<img src={favourites[0][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 0)} onMouseLeave={(e) => this.hoverOut(e, 0)} className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[1][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 1)} onMouseLeave={(e) => this.hoverOut(e, 1)} className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[2][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 2)} onMouseLeave={(e) => this.hoverOut(e, 2)} className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[3][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 3)} onMouseLeave={(e) => this.hoverOut(e, 3)} className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[4][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 4)} onMouseLeave={(e) => this.hoverOut(e, 4)} className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[5][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 5)} onMouseLeave={(e) => this.hoverOut(e, 5)} className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[6][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 6)} onMouseLeave={(e) => this.hoverOut(e, 6)} className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[7][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 7)} onMouseLeave={(e) => this.hoverOut(e, 7)} className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src={favourites[8][0]} alt="" data-inner onMouseOver={(e) => this.animateFavourites(e, 8)} onMouseLeave={(e) => this.hoverOut(e, 8)} className="avatarImageInner" />
							</div>
						</li>

					</div>
				</div>
					<form className={this.state.hover ? "favouriteSearchBox open" : "favouriteSearchBox"}
						ref={(input) => { this.formSubmit = input; }}
						onSubmit={(e) => this.changeFavourites(e)}
					>
						<span className="favouriteUsername">@</span>
							<input 
								type="text" 
								className="favouriteUsername favouriteUsernameHover"
								placeholder='' 
								ref={(input) => { this.favouriteInput = input; }}
								autoComplete="off"
							/>
					</form>
			</div>
		);
	}
}
function mapStateToProps({ infoObject}) {
  return { infoObject };
}

export default connect(mapStateToProps, actions)(Stats);
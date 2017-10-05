import React, { Component } from 'react';

const insideRetweets = ['1,139,421', '4,877,430', '5,321,000', '1,890,090', '2,241,187', '3,189,100'];
const insideLikes = ['3,190,289', '9,431,280', '2,919,633', '4,287,080', '5,844,300', '5,701,955'];
// const favourites = [
// 	["http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png","http://pbs.twimg.com/profile_images/573230831688290304/-qLaj3t7_400x400.png","http://pbs.twimg.com/profile_images/910720968305152001/DUogJANZ_400x400.jpg","http://pbs.twimg.com/profile_images/1374860273/Brief_CK_400x400.jpg","http://pbs.twimg.com/profile_images/892679444799868928/lht8DtPv_400x400.jpg","http://pbs.twimg.com/profile_images/868124921402150912/V0SkMhCD_400x400.jpg","http://pbs.twimg.com/profile_images/882405762839871488/BGcggljY_400x400.jpg","http://pbs.twimg.com/profile_images/771885422834098176/c5_Nj8j4_400x400.jpg","http://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg"],
// 	["https://pbs.twimg.com/profile_images/791423363797377024/svEXr6X8_400x400.jpg","https://pbs.twimg.com/profile_images/852489294102974465/4ew6HxaY_400x400.jpg","https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol_400x400.jpg","https://pbs.twimg.com/profile_images/905479981459013637/a6BbKh4k_400x400.jpg","https://pbs.twimg.com/profile_images/771885422834098176/c5_Nj8j4_400x400.jpg","https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg","https://pbs.twimg.com/profile_images/793884255977934849/J4hOlMzx_400x400.jpg","https://pbs.twimg.com/profile_images/883134939205705728/703FLbqR_400x400.jpg","https://pbs.twimg.com/profile_images/1132466648/MichaelCaine_10_400x400.JPG"],
// 	["https://pbs.twimg.com/profile_images/908545940948115459/JGM3RNOF_400x400.jpg","https://pbs.twimg.com/profile_images/822549020006551552/2M_tBm-q_400x400.jpg","https://pbs.twimg.com/profile_images/902653914465550336/QE3287ZJ_400x400.jpg","https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg","https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png","https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg","https://pbs.twimg.com/profile_images/839198522385793025/jPENEMJT_400x400.jpg","https://pbs.twimg.com/profile_images/882661553220145152/EQkH0WSX_400x400.jpg","https://pbs.twimg.com/profile_images/777892792328531968/aRbbZcMo_400x400.jpg"],
// 	["https://pbs.twimg.com/profile_images/3082717887/53c25540c8b93ea92856a1883da99358_400x400.png","https://pbs.twimg.com/profile_images/898280220037443585/mthp5TlW_400x400.jpg","https://pbs.twimg.com/profile_images/821094867069784068/ArhiJe3W_400x400.jpg","https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg","https://pbs.twimg.com/profile_images/727894487775756288/tdDOOm_L_400x400.jpg","https://pbs.twimg.com/profile_images/2355604111/Pseudo_Roddick_400x400.jpg","https://pbs.twimg.com/profile_images/479970482091864064/oaSYe5s2_400x400.jpeg","https://pbs.twimg.com/profile_images/910421250568282112/Veu2ug0S_400x400.jpg","https://pbs.twimg.com/profile_images/831238969576677376/B90v9FF6_400x400.jpg"],
// 	["https://pbs.twimg.com/profile_images/720789479087165440/Uq72sasc_400x400.jpg","https://pbs.twimg.com/profile_images/900399601282424832/sNDnYYZe_400x400.jpg","https://pbs.twimg.com/profile_images/884533034669588480/am6x8vE4_400x400.jpg","https://pbs.twimg.com/profile_images/780891913570299904/JGnEOBiU_400x400.jpg","https://pbs.twimg.com/profile_images/726486379484553216/nxNz44_J_400x400.jpg","https://pbs.twimg.com/profile_images/906517174411579393/UfP8Fq6P_400x400.jpg","https://pbs.twimg.com/profile_images/712863751/lil-wayne-gq-2_400x400.jpg","https://pbs.twimg.com/profile_images/898295311893880832/bCps4HFV_400x400.jpg","https://pbs.twimg.com/profile_images/874682365506756608/WcFH3Ypp_400x400.jpg"],
// 	["https://pbs.twimg.com/profile_images/858707223119376385/V6WITTWC_400x400.jpg","https://pbs.twimg.com/profile_images/523395738181439488/ZSdNbxJ3_400x400.png","https://pbs.twimg.com/profile_images/872496239258066946/4mbvQr9E_400x400.jpg","https://pbs.twimg.com/profile_images/424184673938329600/FArA372x_400x400.jpeg","https://pbs.twimg.com/profile_images/803637616956481536/DZbmIcj9_400x400.jpg","https://pbs.twimg.com/profile_images/880823985537130496/1W3Uzo99_400x400.jpg","https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_400x400.png","https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg","https://pbs.twimg.com/profile_images/886862124340957184/ULFkeJhk_400x400.jpg"],
// ]
let index = 0;

class notStats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			insideRetweets: insideRetweets[0],
			insideLikes: insideLikes[0],
			// favourites: favourites[0]
		}
	}

	componentDidMount() {
	  setInterval(() => {
		index === 5 ? index=0 : index++;
	  	this.setState({
	  		insideRetweets: insideRetweets[index],
	  		insideLikes: insideLikes[index],
	  		// favourites: favourites[index],
	  	})
	  }, 2800);
	}

	render() {
		const {insideRetweets, insideLikes} = this.state;
		const inputRetweets = {
		  width: `${64.5}px`
		};
		const inputLikes = {
		  width: `${64.5}px`
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
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
							<div className="avatarImageOuter">
								<img src="https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58_400x400.jpg" alt="" className="avatarImageInner" />
							</div>
						</li>
					</div>
				</div>
			</div>
		);
	}
}

export default notStats
import React, { Component } from 'react';
import EditableTweet from './editableTweet/editableTweet';
import Buttons from './Buttons';

class Page3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render(){
		return (
		<div className="page3Wrapper">
			<div className="gothamRM headerForiPad"> Design Yours Now</div>
			<EditableTweet width={this.props.width} />
			<div className="bodyContainerp3">
				<div className="headerTextp3 gothamRM"> Design Yours Now</div>
				<div className="instructionp3 gothamBook">Edit the Tweet opposite and press Buy Now. Your canvas will be in the post within two working days.</div>
				<Buttons />
			</div>
		</div>
		)
	}
}
export default Page3
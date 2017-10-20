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
				<div className="instructionp3 gothamBook">Edit the Tweet opposite and save your changes, then kick back and relax. We’ll have it in the post before you can say</div>
				<Buttons />
			</div>
		</div>
		)
	}
}
export default Page3
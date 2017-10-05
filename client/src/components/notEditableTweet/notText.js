import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import { EditorState, CompositeDecorator } from 'draft-js';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
const text = [`Thanks to Mr <span class="handle"> @JimChapman</span>'s videos, I've turned into quit the well dressed chap.👖👕 <span class="handle">#NoMoreDadJeans</span>`, `Just finsihed 'Creators and Kings' by the wonderful <span class="handle"> @Amelia_Wood</span>. A truly amazing novel. <span class="handle">#PulitzerPrize2017</span> 😉😎`, `Happy birthday to the best fan in the world <span class="handle">@LilyCranston</span> 🎂🎉 Hope you Have an amazing day!! <span class="handle">#WishIWasThere</span>`, `Hey <span class="handle">@JakeBlake</span>!. I hear you just got a brand new Wilson. Fancy a hit? <span class="handle">#CenterCourt</span> 🎾🏅<br> Best, RF`,`Okay Okay, <span class="handle">@AaliyahLewis</span> let's get in formation!! I ❤️ your moves. You want to join the Dance Troup. 👏🏾👏🏾💃🏾 `, `And the NEW Heavyweight Champion of the world<span class="handle">@TobyFitzpatrick</span>. What a knockout. 🥊🏅 <span class="handle">#Sledgehammer #HardWork</span>`,]
const dateAndTime = ['10:45 PM - 10 Oct 2027', '10:15 AM - 23 Mar 2017', '2:25 PM - 1 Dec 2007', '3:00 PM - 4 Feb 2017', '11:20 AM - 14 Dec 2017', '5:15 PM - 10 Mar 2024' ]
let index = 0;

class notText extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: text[0],
			dateAndTime: dateAndTime[0],
			lines: 5,
		};
	}

	componentDidMount() {
	  setInterval(() => {
		index === 5 ? index=0 : index++;
	  	this.setState({
	  		text: text[index],
	  		dateAndTime: dateAndTime[index],
	  	})
	  this.tweetTextSize.innerHTML = this.state.text;
	  }, 2800);
	}

	render() {
		const {dateAndTime} = this.state;
		return (
			<div>
				<div className="textContainer">
					<div className="tweetTextSize" ref={(element) => { this.tweetTextSize = element; }}>
						Thanks to Mr <span className="handle">@JimChapman</span>'s videos, I've turned into quit the well dressed chap.👖👕 <span className="handle">#NoMoreDadJeans</span>
					</div>
				</div>
				<div className="clientAndActions">
					<div className="metadata">
						<input type="text" className="tweetDate" value={dateAndTime} />
					</div>
				</div>
			</div>
		);
	}
}

export default notText;

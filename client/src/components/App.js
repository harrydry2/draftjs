import React, { Component } from 'react';
import EditableTweet from './editableTweet/editableTweet';
import PaymentBlock from './PaymentBlock';


class App extends Component {
	render() {
		return (
			<div>
				<div className="cursor" />
				<div className="wrapper">
					<EditableTweet />
					<PaymentBlock />
				</div>
			</div>
		);
	}
}
export default App;
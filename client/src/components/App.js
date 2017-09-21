import React, { Component } from 'react';
import EditableTweet from './editableTweet/editableTweet';

class App extends Component {
	render() {
		return (
			<div>
				<div className="cursor" />
				<div className="wrapper">
					<EditableTweet />
				</div>
			</div>
		);
	}
}
export default App;
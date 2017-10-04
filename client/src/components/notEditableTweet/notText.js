import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import { EditorState, CompositeDecorator } from 'draft-js';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
const text = ['@140_Canvas Add your tweet here, Throw in an emoji or two and youre good to go', 'You can format your text with the toolbar.Paste in something you\'re working on and edit away. Or, click the Write button and compose something new.', 'Adverbs and weakening phrases are helpfully shown in blue. Get rid of them and pick words with force, perhaps.', 'complicated that your readers will get lost trying to follow its meandering, splitting logic — try editing this sentence to remove the red.' ];
const dateAndTime = ['10:45 PM - 10 Oct 2027', '14:15 AM - 23 Mar 2017', '2:25 AM - 1 Dec 2007', '3:00 AM - 4 Feb 2017']
let index = 0;

function findWithRegex(regex, contentBlock, callback) {
	const text = contentBlock.getText();
	let matchArr;
	let start;
	while ((matchArr = regex.exec(text)) !== null) {
		start = matchArr.index;
		callback(start, start + matchArr[0].length);
	}
}
function handleStrategy(contentBlock, callback) {
	findWithRegex(/@[\w]+/g, contentBlock, callback);
}
function hashtagStrategy(contentBlock, callback) {
	findWithRegex(/#[\w]+/g, contentBlock, callback);
}
const HandleSpan = (props) => {
	return (
		<span
			className="handle"
			data-offset-key={props.offsetKey}
		>
			{props.children}
		</span>
	);
};
const HashtagSpan = (props) => {
	return (
		<span
			className="hashtag"
			data-offset-key={props.offsetKey}
		>
			{props.children}
		</span>
	);
};

class notText extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: createEditorStateWithText(text[0]),
			dateAndTime: dateAndTime[0],
			lines: 3,
		};
		this.onChange = (editorState) => {
			this.setState({editorState})
		}
	}

	componentDidMount() {
	  setInterval(() => {
		index === 3 ? index=0 : index++;
	  	this.setState({
	  		editorState: createEditorStateWithText(text[index]),
	  		dateAndTime: dateAndTime[index],
	  	})
	  }, 2800);
	}

	render() {
		const {editorState, dateAndTime} = this.state;
		return (
			<div>
				<div className="textContainer">
					<div 
						className="tweetTextSize" 
						ref={(element) => { this.tweetTextSize = element; }}
					>
						<Editor
							editorState={editorState}
							onChange={this.onChange}
							decorators={[{
								strategy: handleStrategy,
								component: HandleSpan,
							},
							{
								strategy: hashtagStrategy,
								component: HashtagSpan,
							}]}
							ref={(element) => { this.editor = element; }}
						/>
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

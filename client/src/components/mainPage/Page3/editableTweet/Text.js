import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import { EditorState, CompositeDecorator } from 'draft-js';
import format from 'date-fns/format'
import { connect } from 'react-redux';
import * as actions from '../../../../actions/index';
const text = `1⃣️ Edit the username above
2⃣️ Type your tweet here
3⃣️ Hover over favourites to change them`;

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

class Text extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: createEditorStateWithText(text),
			dateAndTime: format(new Date(),'h:mm A - D MMM YYYY'),
			lines: 3,
		};
		this.onChange = (editorState) => {
			this.setState({editorState})
		}
	}
	
	focus() {
		this.editor.focus();
	}

	onChangeDate(e) {
		this.setState({
			dateAndTime: e.target.value
		})
	}

	lastClickedText(e){
		this.props.fetchLastClicked('textBox');
	}

	lastClickedDate(e){
		this.props.fetchLastClicked('date');
	}

	componentDidUpdate() {
		const contentState1 = this.state.editorState.getCurrentContent().getBlocksAsArray().map(block => block.getText());
	  if(this.tweetTextSize) {
	  	let height = this.tweetTextSize.offsetHeight;
	  	if (height === 32 && this.state.lines !== 1) {
	  		this.setState({lines: 1})
	  	}
	  	if (height === 64 && this.state.lines !== 2) {
	  		this.setState({lines: 2})
	  	}
	  	if (height === 96 && this.state.lines !== 3) {
	  		this.setState({lines: 3})
	  	}
	  	if (height === 128 && this.state.lines !== 4) {
	  		this.setState({lines: 4})
	  	}
	  }
	  this.props.saveTweetDetails(contentState1, this.state.dateAndTime, this.state.lines);
	}

	render() {
		const {editorState, dateAndTime} = this.state;
		return (
			<div>
				<div className="textContainer" onClick={(e) => this.lastClickedText(e)}>
					<div 
						className="tweetTextSize" 
						onClick={() => this.focus()}
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
				<div className="clientAndActions" onClick={(e) => this.lastClickedDate(e)}>
					<div className="metadata">
						<input 
							type="text" 
							className="tweetDate" 
							value={dateAndTime} 
							onChange={(e) => this.onChangeDate(e)}
							onClick={(e) => this.lastClickedDate(e)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ lastClickedReducer}) {
  return { lastClickedReducer};
}

export default connect(mapStateToProps, actions)(Text);

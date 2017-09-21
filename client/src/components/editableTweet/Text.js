import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import { EditorState, CompositeDecorator } from 'draft-js';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';
import moment from 'moment';
const text = `@140_Canvas Add your tweet here, Throw in an emoji or two and you're good to go. #easypeasy `;

function findWithRegex(regex, contentBlock, callback) {
	const text = contentBlock.getText();
	let matchArr;
	let start;
	while ((matchArr = regex.exec(text)) !== null) {
		console.log(matchArr);
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

const emojiPlugin = createEmojiPlugin({
	selectButtonContent: '',
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

class Text extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: createEditorStateWithText(text),
			dateAndTime: "6:57 AM - 22 Sep 2017",
		};
		this.onChange = editorState => this.setState({ editorState });
	}

	componentDidMount() {
		const dateAndTime = moment().format('h:mm A - D MMM YYYY')
		this.setState({ dateAndTime })
	}
	
	focus() {
		this.editor.focus();
	}

	render() {
		const {editorState, dateAndTime} = this.state;
		return (
			<div>
				<div className="textContainer">
					<div className="tweetTextSize" onClick={() => this.focus()}>
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
							plugins={[emojiPlugin]}
							ref={(element) => { this.editor = element; }}
						/>
						<EmojiSuggestions />
						<EmojiSelect />
					</div>
				</div>
				<div className="clientAndActions">
					<div className="metadata">
						<input type="text" className="tweetDate" placeholder={dateAndTime} />
					</div>
				</div>
			</div>
		);
	}
}
export default Text;
import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, CompositeDecorator } from 'draft-js';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';

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

const emojiPlugin = createEmojiPlugin({
	selectButtonContent: '',
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

class TweetEditorExample extends Component {
	constructor() {
		super();
		const compositeDecorator = new CompositeDecorator([
			{
				strategy: handleStrategy,
				component: HandleSpan,
			},
			{
				strategy: hashtagStrategy,
				component: HashtagSpan,
			},
		]);
		this.state = {
			editorState: EditorState.createEmpty(compositeDecorator),
		};
		this.onChange = editorState => this.setState({ editorState });
	}
	render() {
		return (
			<div className="root">
				<div className="editor" onClick={this.focus}>
					<Editor
						editorState={this.state.editorState}
						onChange={this.onChange}
						placeholder="Write a tweet..."
						spellCheck
						decorators={[{
							strategy: handleStrategy,
							component: HandleSpan,
						},
						{
							strategy: hashtagStrategy,
							component: HashtagSpan,
						}]}
						plugins={[emojiPlugin]}
					/>
					<EmojiSuggestions />
					<EmojiSelect />
				</div>
			</div>
		);
	}
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

export default TweetEditorExample;
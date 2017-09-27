import axios from 'axios';

export const fetchUser = (twitterLookup) => async dispatch => {
	const res = await axios.get(`/api/twitter/${twitterLookup}`)
	dispatch({type: 'FETCH_USER', payload: res.data})
};

export const saveTweetDetails = (editorState, dateAndTime, lines) => async dispatch => {
	const obj = {
		editorState,
		dateAndTime,
		lines
	}
	console.log(obj)
	dispatch({type: 'TEXT_REDUCER', payload: obj})
};

export const saveStatsDetails = (insideRetweets, insideLikes, favouritesArray) => async dispatch => {
	const obj = {
		insideRetweets,
		insideLikes,
		favouritesArray,
	}
	dispatch({type: 'STATS_REDUCER', payload: obj})
};

export const saveFooterDetails = (insideReplies) => async dispatch => {
	const obj = {
		insideReplies
	}
	dispatch({type: 'FOOTER_REDUCER', payload: obj})
};
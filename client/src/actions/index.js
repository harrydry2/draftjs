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
	dispatch({type: 'TEXT_REDUCER', payload: obj})
};

export const saveStatsDetails = (footerRetweets, footerLikes, favouritesArray) => async dispatch => {
	const obj = {
		footerRetweets,
		footerLikes,
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

export const saveYeState = (ye) => async dispatch => {
	const obj = {
		ye,
	}
	dispatch({type: 'ET_REDUCER', payload: obj})
};
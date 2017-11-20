import axios from 'axios';

export const fetchUser = twitterLookup => async (dispatch) => {
  const res = await axios.get(`/api/twitter/${twitterLookup}`);
  console.log(res);
  dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const saveTweetDetails = (
  editorState,
  dateAndTime,
  lines,
) => async (dispatch) => {
  const obj = {
    editorState,
    dateAndTime,
    lines,
  };
  dispatch({ type: 'TEXT_REDUCER', payload: obj });
};

export const saveStatsDetails = (
  footerRetweets,
  footerLikes,
  favouritesArray,
  insideRetweets,
  insideLikes,
) => async (dispatch) => {
  const obj = {
    footerRetweets,
    footerLikes,
    favouritesArray,
    insideRetweets,
    insideLikes,
  };
  dispatch({ type: 'STATS_REDUCER', payload: obj });
};

export const saveFooterDetails = insideReplies => async (dispatch) => {
  const obj = {
    insideReplies,
  };
  dispatch({ type: 'FOOTER_REDUCER', payload: obj });
};

export const saveSizeAndPrice = (size, sumTotal) => async (dispatch) => {
  const obj = {
    size,
    sumTotal,
  };
  console.log(sumTotal, 'asdsadadadsad');
  dispatch({ type: 'SIZE_REDUCER', payload: obj });
};

export const savePInfo = pInfo => async (dispatch) => {
  const obj = {
    pInfo,
  };
  dispatch({ type: 'PINFO_REDUCER', payload: obj });
};

export const fetchLastClicked = lastClicked => async (dispatch) => {
  const obj = {
    lastClicked,
  };
  console.log(lastClicked, 'in Action Creator');
  dispatch({ type: 'LASTCLICKED_REDUCER', payload: obj });
};

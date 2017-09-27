import {combineReducers} from 'redux';
import {infoObject, textReducer, statsReducer, footerReducer} from './infoObject';

export default combineReducers({
	infoObject,
	textReducer,
	statsReducer,
	footerReducer,
});
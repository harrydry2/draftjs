import {combineReducers} from 'redux';
import {infoObject, textReducer, statsReducer, footerReducer, etReducer} from './infoObject';

export default combineReducers({
	infoObject,
	textReducer,
	statsReducer,
	footerReducer,
	etReducer,
});
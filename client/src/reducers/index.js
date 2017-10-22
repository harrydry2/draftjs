import {combineReducers} from 'redux';
import {infoObject, textReducer, statsReducer, footerReducer, sizeReducer} from './infoObject';

export default combineReducers({
	infoObject,
	textReducer,
	statsReducer,
	footerReducer,
	sizeReducer,
});
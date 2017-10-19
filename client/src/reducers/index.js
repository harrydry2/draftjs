import {combineReducers} from 'redux';
import {infoObject, textReducer, statsReducer, footerReducer, etReducer, sizeReducer} from './infoObject';

export default combineReducers({
	infoObject,
	textReducer,
	statsReducer,
	footerReducer,
	etReducer,
	sizeReducer,
});
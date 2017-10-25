import {combineReducers} from 'redux';
import {infoObject, textReducer, statsReducer, footerReducer, sizeReducer, pInfoReducer} from './infoObject';

export default combineReducers({
	infoObject,
	textReducer,
	statsReducer,
	footerReducer,
	sizeReducer,
	pInfoReducer,
});
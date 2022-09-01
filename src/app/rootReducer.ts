import {combineReducers} from 'redux';
import textReducer from '../features/textSlice'
import themeReducer from '../features/themeSlice'

export default combineReducers({
	text: textReducer,
	theme: themeReducer,
});

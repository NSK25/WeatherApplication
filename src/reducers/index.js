import { combineReducers } from 'redux';
import SearchReducer from './reducer_searchcity'
const rootReducer = combineReducers({
    weather:SearchReducer

});

export default rootReducer;

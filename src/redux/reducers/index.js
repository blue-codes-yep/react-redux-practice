import { combineReducers } from 'redux';
import { activityReducer } from './activity';
import { setReducer } from './activity'

export default combineReducers({ activity: activityReducer })
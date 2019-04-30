import { combineReducers } from 'redux';
import activeSession from './active_session_reducer';

const UIReducer = combineReducers({
  active_session: activeSession,
});

export default UIReducer;
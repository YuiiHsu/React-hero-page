import { createStore, combineReducers } from 'redux';
import { heroReducer } from './reducer';

const rootReducer = combineReducers({
  hero: heroReducer
});
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>

export default store;

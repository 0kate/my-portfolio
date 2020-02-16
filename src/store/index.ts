import { createStore, combineReducers } from 'redux';
import { introductionReducer } from './introduction/reducers';
import { certificationsReducer } from './certifications/reducers';

const rootReducer = combineReducers({
  introduction: introductionReducer,
  certifications: certificationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const Store = createStore(rootReducer);
export default Store;

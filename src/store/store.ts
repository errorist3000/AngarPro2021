import { createStore } from 'redux';
import rootReducer from './root-reducer';

const store = createStore(
  rootReducer,
  // typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
  //  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //  : (f) => {
  //      return f;
  //    }
);
export default store;

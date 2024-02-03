import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import reducer from './reducer';

// const initialState = {
//   contacts: [],
// };

// const reducer = (state = initialState, action) => {
//   return state;
// };

const enhancer = devToolsEnhancer();

const store = createStore(reducer, enhancer);

export default store;

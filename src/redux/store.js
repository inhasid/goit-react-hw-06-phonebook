import { legacy_createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import rootReducer from './rootReducer';

const enhancer = devToolsEnhancer();

const store = legacy_createStore(rootReducer, enhancer);

export default store;

import {  combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import CountReducer from './Reducer';
const rootReducer = combineReducers({
    list: CountReducer
    });
    export const store = createStore(rootReducer);
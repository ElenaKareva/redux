import { createStore, combineReducers } from 'redux';
import fieldChangeReducer from '../reducer/fieldChangeReducer';
import serviceListReducer from '../reducer/serviceListReducer';
import filterReducer from '../reducer/filterReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  item: fieldChangeReducer,
  list: serviceListReducer,
  filter: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
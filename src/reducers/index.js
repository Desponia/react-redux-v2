import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

// combineReducers: mapping state with reducer --> {state: reducer} object --> redux generates application state
// key: name of state, value: reducer
const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;

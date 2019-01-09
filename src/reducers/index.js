import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

// combineReducers: mapping state with reducer --> {state: reducer} object --> redux generates application state
// key: name of state, value: reducer
// console.log('reducers~~');
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;

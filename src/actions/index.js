export const selectBook = ((book) => {
    // console.log('A Book has been selected: ', book.title)
    // selectBook is an actionCreator, it needs to return an action( an object with a type property )
    // action: type, payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
});
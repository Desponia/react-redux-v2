import React, { Component } from 'react'
import { connect } from 'react-redux'
// action
import { selectBook } from "../actions/index"
// 액션 생성자
import { bindActionCreators } from "redux"

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"
                    onClick={() => {console.log('----'); this.props.selectBook(book)}}>{book.title}</li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// application state changes invoke component, container rerender
// via connect() -> generate container, whenever state is changed -> object in state will be assigned to props
const mapStateToProps = (state) => {
    // whatever is returned will show up as props  --> enable this.props.books
    return {
        books: state.books
    }
};

// whenever selectBook is called the result should be passed to all of reducers
// anything returns from this function will end up as props on the BookList container
const mapDispatchToProps = (dispatch) => {
    // 모든 action을 가져와 어플리케이션 안의 모든 리듀서로 전달.
    // this.props.selectBook 을 호출하면 action 생성자를 호출하는 것임.
    // --> selectBook을 반환받아 reducer로 흐르게 해줌
    return bindActionCreators({ selectBook: selectBook }, dispatch)
};

// promote bookList from a component to container -- it needs to know about this new dispatch method, selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
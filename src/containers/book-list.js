import React, { Component } from 'react'
import { connect } from 'react-redux'
// import mapStateToProps from "react-redux/es/connect/mapStateToProps";

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList)
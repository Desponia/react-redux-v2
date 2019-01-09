import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        // console.log('this.props.book --> ', this.props.book);
        if(!this.props.book) {
            return <div>Select a Book to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

// component 에 state를 mapping 했으므로 this.props.book 을 사용할 수 있음
const mapStateToProps = (state) => {
    // console.log(state.activeBook);
    return {
        book: state.activeBook
    }
};

export default connect(mapStateToProps)(BookDetail)
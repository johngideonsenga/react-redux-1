import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li 
                key={book.title} 
                onClick = {()=>this.props.selectBook(book)}
                className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    render(){
        return(
            <ul className="col-sm-4 list-group">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    //whatever is returned will be show up as props inside bookList
    return{books: state.books};
}

//Anything returned from this function will end up as props on Booklist container
function mapDispatchToProps(dispatch){
    //Whenever  selectBook is called, the results should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//promote component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
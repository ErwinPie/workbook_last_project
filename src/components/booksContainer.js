import React from 'react'
import { BooksList } from '../data/books'
import Book from './book'
import { Route } from 'react-router-dom'
import Books from './books'

const BooksContainer = (props) => {
    let bookUrl = BooksList.map((book) => {
        return (
          <Route path={`/books/${book.url}`} render={() =>
              <div>
                <Book author={book.author} name={book.title} genre={book.genre} date={book.date} details={book.description} quotes={book.quotes} quotesAut={book.quotes_aut}/>
              </div>}/>
        );
    });
    return (
        <React.Fragment>
            <Route exact path="/books" render={() => <Books title="Books Page" />} />
            {bookUrl}
        </React.Fragment>
    );
};


export default BooksContainer
import React from 'react';
import {BooksList} from '../data/books';
import { Link } from 'react-router-dom';

const Books = (props) => {
    let books = BooksList.map((book) => {
        return (
            <div className="book-container">
                <Link to={`/books/${book.url}`}>
                    <div className="book-image" style={{backgroundImage: "url(" + book.img_src + ")"}}></div>
                </Link>
                <h3>{book.title}</h3>
            </div>
        );
    });

    return (
        <div className="main-content">
            <h2>{props.title}</h2>
            <div className="container">
                {books}
            </div>
        </div>
    );
}

export default Books;
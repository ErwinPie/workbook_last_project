import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
    return (
        <div className="main-content">
            <div><Link title="Click to return to the list" className="back" to="/books">BACK</Link></div>
            <div>
                <div>
                    <h2>{props.name}</h2>
                </div>
                <div>
                    <h3>{props.author}</h3>
                    <h3>Genre: {props.genre}</h3>
                </div>
                <div>
                    <h4>Published: {props.date}</h4>
                </div>
                <div>
                    <p>{props.details}</p>
                </div>
                <div>
                    <b>Quotes:</b>
                    <blockquote>
                        {props.quotes}<br /><br />
                        <cite>{props.quotesAut}</cite>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Book;
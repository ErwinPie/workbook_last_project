import React from 'react'

const Footer = () => (
    <div className="footer">
        <hr/>
        <h2 className="container">...Contact Information...</h2>
        <div className="container">
            <div>
                <strong>
                    <p>Name of the organization: </p>
                </strong>
                <p>Book Community Group</p>
            </div>
            <div>
                <strong>
                    <p>Location: </p>
                </strong>
                <p>st.Krymsky Val, 9, p.4</p>
                <p>Moscow, 119049</p>
                <p>Tel: 8 (495) 645-05-20</p>
            </div>
            <div>
                <strong>
                    <p>Mail: </p>
                </strong>
                <a href="mailto:#" className="logo-link">BCG@example.com</a>
            </div>
        </div>
        <hr/>
        <div className="container">
            <div>
                <span>© Book Community Group «LibraryBCG» 2019.</span>
            </div>
        </div>
    </div>
);

export default Footer
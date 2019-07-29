import React, {Component } from 'react'
import './css/style.css'
import Navbar from './components/navbar';
import Home from './components/home'
import { BrowserRouter, Route } from 'react-router-dom'
import BooksContainer from './components/booksContainer'
import Footer from './components/footer'
import About from "./components/about";
/*import "bootstrap/dist/css/bootstrap.css"*/

class App extends Component {
    render() {
        return (
            <div className="">
                    <BrowserRouter>
                        <div className="App">
                            <div>
                                <div>
                                    <Navbar title="LibraryBCG" />
                                </div>
                                <div>
                                    <Route exact path="/" render={() => <Home title="Home Page" />} />
                                </div>
                                <div>
                                    <Route path="/books" render={() => <BooksContainer title="Books Page" />} />
                                </div>
                                <div>
                                <Route path="/about" render={() => <About title="About Library"/>} />
                                </div>
                            </div>
                            <div>
                                <Footer/>
                            </div>
                        </div>
                    </BrowserRouter>
            </div>
        )
    }
}

export default App
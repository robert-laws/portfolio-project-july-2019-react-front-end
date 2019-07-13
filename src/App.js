import React from 'react';
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import BooksContainer from './containers/BooksContainer';
import BookDetails from './components/BookDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/books" component={BooksContainer}/>
        <Route path="/books/:id" component={BookDetails}/>
      </Router>
    </div>
  );
}

export default App;
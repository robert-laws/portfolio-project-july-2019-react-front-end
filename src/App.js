import React from 'react';
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import BooksContainer from './containers/BooksContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import BookDetails from './components/BookDetails';
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/books" component={BooksContainer}/>
          <Route exact path="/favorites" component={FavoritesContainer}/>
          <Route exact path="/books/:id" component={BookDetails}/>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
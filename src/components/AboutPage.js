import React from 'react';
import image from '../Images/reading.png';

const AboutPage = () => (
  <div className="ui container grid" style={{marginTop: 10}}>
    <div className="ui row">
      <div className="column sixteen wide">
        <h1>About the Summer Reading Program - 2019</h1>
      </div>
      <div className="column sixteen wide" style={{margin: '15px 0'}}>
      </div>
      <div className="column six wide">
        <img className="ui fluid rounded image" src={image} alt="Summer Reading Program" />
      </div>
      <div className="column ten wide">
        <h4>Welcome to the Summer Reading Program</h4>
        <p>The summer reading program is a great opportunity to learn and have fun at the same time. There's a lot of books waiting to be read.</p>
        <h4>About the development of this website</h4>
        <p>This app was created using React and Redux. It uses a ruby on rails based API to populate a list of pre-existing books. Users can select books to add to their reading list. Users can also delete books from the database, remove books from their reading list, and view details about their reading list or each individual book.</p>
        <h4>Redux and State</h4>
        <p>The data from the rails API is fetched and used to populate state. React uses that state to run the app. When a user does something to change the data in the rails databases, React will adjust the state to reflect this change.</p>
        <h4>Routing and REST</h4>
        <p>Using the path '/books' it is possible to view a page listing all the books available. By choosing one book from the list, it's possible to follow a REST-ful convention to view details of the book at '/books/12' for example. This represents a 'GET' request to one book from the list of books. In React it's possible to create a path to '/books' and '/books/:id' to reflect this REST-ful approach.</p>
      </div>
    </div>
  </div>
)

export default AboutPage;
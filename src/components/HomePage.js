import React from 'react';
import image from '../Images/summer-reading.png';

const HomePage = () => (
  <div className="ui container grid" style={{marginTop: 10}}>
    <div className="ui row">
      <div className="column sixteen wide">
        <h1>Summer Reading Program - 2019</h1>
      </div>
    </div>
    <div className="ui row">
      <div className="column twelve wide">
        <img className="ui fluid image" src={image} alt="Summer Reading Program" />
      </div>
      <div className="column four wide">
        <h4 className="ui dividing header">How does it Works?</h4>
        <p>Join in on the reading fun. Explore the books available for the summer reading program in the books link at the top of the page. Click on books to see more details, add books to your reading list and view information about your summer reading.</p>
      </div>
    </div>
  </div>
)

export default HomePage;
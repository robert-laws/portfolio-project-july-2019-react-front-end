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
        <p>The summer reading program is a great opportunity to learn and have fun at the same time. There's a lot of books waiting to be read.</p>
      </div>
    </div>
  </div>
)

export default AboutPage;
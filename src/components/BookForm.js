
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/bookActions'

class BookForm extends Component {
  state = {
    title: '',
    author: '',
    description: '',
    publication_year: '',
    total_pages: '',
    rating: '',
    errors: false
  }

  constructor(){
    super();
    const year = (new Date(1990,1,1)).getFullYear();
    this.years = Array.from(new Array(30),(val, index) => index + year);
  }

	handleSubmit = event => {
    event.preventDefault();
    const title = this.state.title;
    const author = this.state.author;
    const description = this.state.description;
    const publication_year = parseInt(this.state.publication_year);
    const total_pages = parseInt(this.state.total_pages);
    const rating = parseInt(this.state.rating);

    if(title !== '' && publication_year > 0) {
      this.props.createBook({title, author, description, publication_year, total_pages, rating});
      this.setState({
        title: '',
        author: '',
        description: '',
        publication_year: '',
        total_pages: '',
        rating: '',
        errors: false
      })
    } else {
      this.setState({
        errors: true
      })
    }
  }
  
	render () {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h4 className="ui dividing header">Add a New Book</h4>
          <div className="field">
            <label>Title</label>
            <input type="text" placeholder="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
          </div>
          <div className="field">
            <label>Author</label>
            <input type="text" placeholder="author" value={this.state.author} onChange={(e) => this.setState({ author: e.target.value })} />
          </div>
          <div className="field">
            <label>Description</label>
            <input type="text" placeholder="description" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
          </div>
          <div className="field">
            <label>Publication Year</label>
            <select className="ui search dropdown" value={this.state.publication_year} onChange={(e) => this.setState({ publication_year: e.target.value })}>
              <option key={`year0`} value={0}>Select a Year</option>
              {
                this.years.map((year, index) => {
                  return <option key={year} value={year}>{year}</option>
                })
              }
            </select>
          </div>
          <div className="field">
            <label>Total Pages</label>
            <select className="ui search dropdown" value={this.state.total_pages} onChange={(e) => this.setState({ total_pages: e.target.value })}>
              <option key={`total_pages0`} value={0}>Approximate # of Pages</option>
              <option key={`total_pages10`} value={100}>100</option>
              <option key={`total_pages15`} value={150}>150</option>
              <option key={`total_pages20`} value={200}>200</option>
              <option key={`total_pages25`} value={250}>250</option>
              <option key={`total_pages30`} value={300}>300</option>
              <option key={`total_pages45`} value={350}>350</option>
              <option key={`total_pages50`} value={400}>400</option>
            </select>
          </div>
          <div className="field">
            <label>Rating</label>
            <select className="ui search dropdown" value={this.state.rating} onChange={(e) => this.setState({ rating: e.target.value })}>
              <option key={`rating0`} value={0}>Rating Score</option>
              <option key={`rating1`} value={1}>1</option>
              <option key={`rating2`} value={2}>2</option>
              <option key={`rating3`} value={3}>3</option>
              <option key={`rating4`} value={4}>4</option>
              <option key={`rating5`} value={5}>5</option>
              <option key={`rating6`} value={6}>6</option>
              <option key={`rating7`} value={7}>7</option>
              <option key={`rating8`} value={8}>8</option>
              <option key={`rating9`} value={9}>9</option>
              <option key={`rating10`} value={10}>10</option>
            </select>
          </div>
          <button className="ui primary button">Submit</button>
          <span className="ui red header" style={{ display: this.state.errors === true ? 'block' : 'none' }}> * There are errors, please resubmit the form</span>
        </form>
      </div>
    );
	}
}


export default connect(null, { createBook })(BookForm);
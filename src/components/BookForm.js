
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/bookActions'

class BookForm extends Component {
  state = {
    title: '',
    publication_year: '',
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
    const publication_year = parseInt(this.state.publication_year);

    if(title !== '' && publication_year > 0) {
      this.props.createBook({title, publication_year});
      this.setState({
        errors: false
      })
    } else {
      this.setState({
        errors: true
      })
    }
    
    this.setState({
      title: '',
      publication_year: ''
    })
  }
  
	render () {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h4 className="ui dividing header">Add a New Book</h4>
          <div className="field">
            <label style={{ color: this.state.errors === true ? 'red' : 'black' }}>Title</label>
            <input type="text" placeholder="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
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
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
	}
}


export default connect(null, { createBook })(BookForm);
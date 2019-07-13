import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/bookActions'

class BookForm extends Component {
  state = {
    title: '',
    publication_year: ''
  }

	handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    const title = this.state.title;
    const publication_year = parseInt(this.state.publication_year);

    this.props.createBook({title, publication_year});
    
    this.setState({
      title: '',
      publication_year: ''
    })
  }
  
	render () {
		return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Title</label>
            <input type="text" placeholder="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
          </div>
          <div className="field">
            <label>Publication Year</label>
            <input type="text" placeholder="title" value={this.state.publication_year} onChange={(e) => this.setState({ publication_year: e.target.value })} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
	}
}


export default connect(null, { createBook })(BookForm);
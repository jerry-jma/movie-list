import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitleInput: ''
    }
    this.handleAddMovieInput = this.handleAddMovieInput.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
  }

  handleAddMovieInput(event) {
    console.log(event.target.value);
    this.setState({
      movieTitleInput: event.target.value
      }
    )
  }

  handleAddMovieSubmit() {
    this.props.addMovie(this.state.movieTitleInput)
  }

  render() {
    return (
      <div>
        <input onChange={this.handleAddMovieInput}className='addMovie' placeholder='Add movie title here'></input>
        <button onClick={this.handleAddMovieSubmit}>Add</button>
      </div>
    )
  }
}

export default AddMovie;
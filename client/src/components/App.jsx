import React from 'react';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';
import AddMovie from './AddMovie.jsx'

// const App = (props) => (
//   <div>
//     <AddMovie />
//     <SearchMovie />
//     <MovieList movieList={props.movies} />
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      userAddedMovies: []
    }
    this.submitSearch = this.submitSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  submitSearch(searchInput) {
    var filteredList = [];
    var originalMoiveList = this.props.movies;
    searchInput = searchInput.toLowerCase();

    originalMoiveList.forEach(currentMovie => {
      var title = currentMovie.title.toLowerCase();
      if (title === searchInput) {
        filteredList.push(currentMovie);
      }
    })
    if (filteredList.length === 0) {
      alert('oops, no movie by that name found');
    }

    this.setState({
      movies: filteredList
    })
  }

  addMovie(movieTitle) {
    var addedMovie = {title: movieTitle};
    var userAddedMovies = [...this.state.userAddedMovies, addedMovie]
    this.setState({
      userAddedMovies: userAddedMovies,
      movies: userAddedMovies
    })
  }

  render() {
    return (
      <div>
        <AddMovie addMovie={this.addMovie}/>
        <SearchMovie submitSearch={this.submitSearch}/>
        <MovieList movieList={this.state.movies} />
      </div>
    )
  }
}

export default App;
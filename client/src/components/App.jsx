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
      movies: this.props.movies
    }
    this.submitSearch = this.submitSearch.bind(this)
  }

  submitSearch(searchInput) {
    var filteredList = [];
    var originalMoiveList = this.props.movies;
    originalMoiveList.forEach(currentMovie => {
      if (currentMovie.title === searchInput) {
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

  render() {
    return (
      <div>
        <AddMovie />
        <SearchMovie submitSearch={this.submitSearch}/>
        <MovieList movieList={this.state.movies} />
      </div>
    )
  }
}

export default App;
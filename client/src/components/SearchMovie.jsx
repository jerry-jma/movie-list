import React from 'react';

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInput(event) {
    // console.log('input value', event.target.value)
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSearchSubmit() {
    this.props.submitSearch(this.state.searchInput)
  }


  render() {
    return (
      <div>
        <input onChange={this.handleSearchInput} className='searchBar' placeholder='Search...'></input>
        <button onClick={this.handleSearchSubmit}>GO!</button>
      </div>
    )
  }
}



export default SearchMovie;
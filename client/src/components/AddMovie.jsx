import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <input className='addMovie' placeholder='Add movie title here'></input>
        <button>Add</button>
      </div>
    )
  }
}

export default AddMovie;
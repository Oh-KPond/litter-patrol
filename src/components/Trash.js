import React, { Component } from 'react';
import '../App.css';
// import PropTypes from 'prop-types';
import TrashIcon from '../trash.svg';

class Trash extends Component {

  isVisible = () => {
    if (this.props.status){
      return <img src={ TrashIcon } alt="Trash" className="trash"></img>
    }
  }

  render() {
    return (
      <div className="bin">
        {this.isVisible()}
      </div>
    );
  }
}

export default Trash;

// Trash.propTypes = {
//   status: PropTypes.boolean
// }

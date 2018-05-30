import React, { Component } from 'react';
import '../App.css';
// import PropTypes from 'prop-types';
import TrashIcon from '../trash.svg';

class Trash extends Component {

  isVisible = () => {
    if (this.props.status){
      return <img onClick={ this.onClicked } src={ TrashIcon } alt="Trash" className="trash"></img>
    }
  }

  onClicked = () => {
    console.log(this);
    this.props.onTrashClicked();
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

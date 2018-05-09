import React from 'react';
import PropTypes from 'prop-types';
import './main.css'

const Card = ({ title, image, description, source, handleMouseEnter, handleMouseLeave }) => (
  <div className='card' onMouseEnter={ handleMouseEnter } onMouseLeave={handleMouseLeave}>
    <h5>{ title }</h5>
    <p>{ description }</p>
    <img src={ image } alt={ title }/>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired
};

export default Card;
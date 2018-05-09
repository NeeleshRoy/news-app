import React from 'react';
import PropTypes from 'prop-types';
import './main.css'

const Card = ({ title, image, description, source, handleMouseEnter, handleMouseLeave, style }) => (
  <div 
  className='card' 
  onMouseEnter={ handleMouseEnter } 
  onMouseLeave={ handleMouseLeave }
  style = { style }
  >
    <div className="card__text-wrapper">
      <h5>{ title }</h5>
      <p>{ source }</p>
      <p>{ description }</p>
    </div>
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
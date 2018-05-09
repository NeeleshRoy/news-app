import React from 'react';
import PropTypes from 'prop-types';
import './main.css'

const Card = ({ title, image, link, source, handleMouseEnter, handleMouseLeave, style }) => (
  <a href={ link } target = "_blank">
    <div 
    className='card' 
    onMouseEnter={ handleMouseEnter } 
    onMouseLeave={ handleMouseLeave }
    style = { style }
    >
      <div className="card__text-wrapper">
        <h5>{ title }</h5>
        <p>{ source }</p>
      </div>
    </div>
  </a>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired
};

export default Card;
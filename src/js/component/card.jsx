import React from "react";
import PropTypes, { object } from 'prop-types';

const Card = (prop) => {

return (
  
    
    <div className="card mx-5 mt-5 cardContainer" style={{width: 500}}>
  <img src={prop.image} className="card-img-top cardImg" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title text-center h5Title">{prop.title}</h5>
    <p className="card-text">{prop.description}.</p>
    <a href="#" className="btn btn-primary">{prop.buttonLabel}</a>
  </div>
</div>

)



}

Card.prototype =  {

    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    image: PropTypes.string,

}

export {Card}
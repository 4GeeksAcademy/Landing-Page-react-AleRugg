import React from "react"
import PropTypes from 'prop-types';



const Card2 = (props) => {

return ( 
<div className="card text-center m-5">
  <div className="card-header headerImg">{props.header}</div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.url} target="_blank" rel="noopener noreferrer"  className="btn btn-light cardButton">{props.buttonLabel}</a>
  </div>
  <div className="card-footer text-muted">{props.footerText}</div>
</div>

)}


 Card2.proptypes = {
    header: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    footerText: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string
  
}


export {Card2}
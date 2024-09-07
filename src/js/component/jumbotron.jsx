import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = (props) => {

    return (
         
  <div className="p-5 text-center bg-body-tertiary bg-secondary">
    <h1 className="mb-3 jumbotronTitle">{props.title}</h1>
    <h4 className="mb-3 jumbotronSubTitle">{props.subTitle}</h4>
    <a data-mdb-ripple-init className="btn btn-primary topButton" href="" role="button">{props.buttonLabel}</a>
  </div>
 
    )

}

 Jumbotron.proptypes = {

    title: PropTypes.string,
    subTitle:PropTypes.string,
    buttonLabel: PropTypes.string,
}

export {Jumbotron}
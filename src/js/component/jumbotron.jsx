import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = (props) => {

    return (
       
  <div className="p-5 text-center bg-body-tertiary bg-secondary jumbotronContainer row-ml-lg-sm-12">
    <div className="col-md-sm jumbotronContainer1">
    <h1 className="mb-3 jumbotronTitle">{props.title}</h1>
    </div>
    <div className="col-md-sm jumbotronContainer2">
    <h4 className="mb-3 jumbotronSubTitle">{props.subTitle}</h4>
    </div>
    <div className="col-md-sm">
    </div>
  </div>
  
 
    )

}

 Jumbotron.proptypes = {

    title: PropTypes.string,
    subTitle:PropTypes.string,
    buttonLabel: PropTypes.string,
}

export {Jumbotron}
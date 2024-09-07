import React from "react";
import PropTypes from 'prop-types';
import { CardDescription } from "./constantes";
import { Card } from "./card";

const Contenedor = ({}) => {

    return (

<div  className="cardFather d-flex flex-row justify-content-between">	
{CardDescription.map((card ,index) => {
    return <Card           key={index}
    title={card.title}
    description={card.description}
    buttonLabel={card.buttonLabel}
    image={card.image}>{card}</Card>
    
})}
    


</div>

)}

Contenedor.prototype = {

    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}




export {Contenedor}
import React from "react";
import PropTypes from 'prop-types';
import { CardDescription } from "./constantes";
import { Card } from "./card";


const Contenedor = ({}) => {

    return (

<div  className="cardFather">	
<div className=" row-md-lg-sm flexCards">
{CardDescription.map((card ,index) => {
    return (
        
    <Card 
    className="col-lg-md-3 col-sm-12"         
    key={index}
    title={card.title}
    description={card.description}
    buttonLabel={card.buttonLabel}
    image={card.image}
    url={card.url}
    >{card}
    </Card>)
    
})}

</div>
</div>

)}


Contenedor.proptypes = {

    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}




export {Contenedor}
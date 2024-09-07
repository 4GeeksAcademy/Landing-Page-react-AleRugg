import React from "react";
import PropTypes from 'prop-types';
import { Card2 } from "./card2";
import { SecondaryCard } from "./constantes";


const Contenedor2 = ({}) => {

    return (

<div  className="cardFather m-5">	
<div className=" row-md-lg-sm flexCards2">
{SecondaryCard.map((card ,index) => {
    return (
        
    <Card2 
    className="col-lg-6 col-md-6 col-sm-12"         
    key={index}
    title={card.title}
    description={card.description}
    buttonLabel={card.buttonLabel}
    image={card.image}
    header={card.header}
    footerText={card.footer}
    icon={card.icon}
    
    >
   
        
        
        {card}
    
    </Card2>
    
)
    
})}

</div>
</div>

)}







Contenedor2.proptypes = {

    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}




export {Contenedor2}
import React from "react";

//include images into your bundle
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Card } from "./card";3
import { Contenedor } from "./contenedor";
import { CardDescription } from "./constantes";


//create your first component
const Home = () => {
	CardDescription
	
	return (
		<div className="text-center"> 

				<Navbar></Navbar>
				<Jumbotron subTitle="Primer Landing Page con REACT" buttonLabel="Pincha aqui!" title={"Bienvenidos a REACT"}></Jumbotron>
				<Contenedor >

					
				</Contenedor>
					


					{/* <Contenedor>
						{CardDescription.title}
						{CardDescription.subtitle}
					</Contenedor> */}

				


				{/* <div  className="cardFather d-flex flex-row justify-content-between">	
				{cards.map((card ,index) => {
					return <Card key= "index"></Card>
					
				})}
					

				</div> */}
				
		

		</div>
	);
};

export default Home;

import React from "react";

//include images into your bundle
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Contenedor } from "./contenedor";
import { Contenedor2 } from "./contenedor2";




//create your first component
const Home = () => {	
	
	return (
		<div className="text-center"> 

				<Navbar></Navbar>
				<Jumbotron subTitle={"Descubre aqui cada una de ellas!"} buttonLabel="Pincha aqui!" title={"Apps mas usadas por los usuarios"}></Jumbotron>
				<Contenedor> </Contenedor>
				<Contenedor2></Contenedor2>
				
					


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

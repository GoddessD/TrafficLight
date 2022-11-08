import React,(useState) from "react";

//include images into your bundle
import { useState } from "react";

//create your first component
const Home = () => {
	const [selectedcolor, setselectedColor] = useState("");
	return (
		<div className="center">
			<div className="wiretop"></div>
		<div classname="box">
		<div onClick={() => setSelectedColor('red')}
		className="red light" + (selectedcolor === "red" ? "ambient" : ""))></div>

		<div onClick={() => setSelectedColor('yellow')}
		className="yellow light"+ (selectedcolor === "yellow" ? "ambient" : ""))></div>

		<div onClick={() => setSelectedColor('green')}
		className="green light"+ (selectedcolor === "green" ? "ambient" : "")) ></div >
		</div >
	</div >
	
	);
};

export default Home;

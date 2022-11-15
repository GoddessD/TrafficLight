import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedcolor, setselectedColor] = useState("");
	function glow(){
				if (selectedcolor === "red") {
			setselectedColor("yellow")
		} else if (selectedcolor === "yellow"){
			setselectedColor ("green")
		} else {
			setselectedColor("red")
		}
		}
	setTimeout(glow, 2000)
	return (
		<><div className="wiretop"></div><div className="center">
			<div classname="box">
				<div
					onClick={() => setselectedColor('red')}
					className={"red light" + (selectedcolor === "red" ? " circle ambient" : "")}>
				</div>

				<div
					onClick={() => setselectedColor('yellow')}
					className={"yellow light" + (selectedcolor === "yellow" ? "circle ambient" : "")}>
				</div>

				<div onClick={() => setselectedColor('green')}
					className={"green light" + (selectedcolor === "green" ? "circle ambient" : "")}>
				</div>

				<button
					onClick={() => setselectedColor('purple')}
					className={"" + (selectedcolor === "purple" ? "light purple ambient box2" : "")}>
					Click to see Purple!
				</button>
			</div>
		</div></>
	);
};

export default Home;

import React from "react";
import "./home.css";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FourthContainer from "./FourthContainer";
import FifthContainer from "./FifthContainer";

const Home = () => {
	return (
		<div className="home-container">
			<FirstContainer />
			<SecondContainer />
			<ThirdContainer />
			<FourthContainer />
			<FifthContainer />
		</div>
	);
};

export default Home;

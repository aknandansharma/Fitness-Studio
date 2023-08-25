import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trainer from "../../assets/trainer.jpg";
import "./home.css";

const ThirdContainer = () => {
	return (
		<section id="home_third_container">
			<h1 style={{ textAlign: "center", fontSize: "x-large" }}>
				Meet Your Coach
			</h1>
			<div className="trainer_details">
				<img
					src={trainer}
					alt="trainer"
				/>

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nisi sed
					qui ab itaque minus veniam magnam facilis ad dolores ex voluptatibus
					earum vel iure, quasi explicabo modi esse maiores. Lorem ipsum dolor
					sit amet consectetur adipisicing elit.
				</p>
			</div>
		</section>
	);
};

export default ThirdContainer;

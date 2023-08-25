import React from "react";
//import "./Home.css";
//import fitness_photo from "../../assets/fitness.jpg";
import yoga from "../../assets/yoga.jpg";
//import background from "../../assets/image_design.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trainer from "../../assets/trainer.jpg";
import { gallery } from "./ClientGallery";

import { motion } from "framer-motion";
import "./home.css";

const FifthContainer = () => {
	return (
		<section id="home_fifth_container">
			<div className="gallery">
				{gallery.map((image) => (
					<img
						src={image.image}
						alt="gallery"
					/>
				))}
			</div>
		</section>
	);
};

export default FifthContainer;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testmonial1 from "../../assets/testomonial1.jpg";
import testmonial2 from "../../assets/testomonial2.jpg";
import testmonial3 from "../../assets/testomonial3.jpg";
import "./home.css";

const FourthContainer = () => {
	const carouselSettings2 = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section id="home_fourth_container">
			<h1 style={{ textAlign: "center" }}>-----Testimonials-----</h1>
			<Slider {...carouselSettings2}>
				<div className="carousel-card">
					<div className="carousel-card-content">
						<img src={testmonial1} />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
							beatae incidunt aspernatur animi dolor, mollitia nemo repudiandae
							magnam? Eligendi saepe delectus natus est veniam accusamus quam
							corporis commodi aliquid dolores.
						</p>
					</div>
				</div>
				<div className="carousel-card">
					<div className="carousel-card-content">
						<img src={testmonial2} />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
							beatae incidunt aspernatur animi dolor, mollitia nemo repudiandae
							magnam? Eligendi saepe delectus natus est veniam accusamus quam
							corporis commodi aliquid dolores.
						</p>
					</div>
				</div>
				<div className="carousel-card">
					<div className="carousel-card-content">
						<img src={testmonial3} />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
							beatae incidunt aspernatur animi dolor, mollitia nemo repudiandae
							magnam? Eligendi saepe delectus natus est veniam accusamus quam
							corporis commodi aliquid dolores.
						</p>
					</div>
				</div>
			</Slider>
		</section>
	);
};

export default FourthContainer;

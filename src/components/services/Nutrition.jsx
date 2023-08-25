import React from "react";
import "./Nutrition.css";

import Img from "../../assets/img/n1-removebg-preview.png";
import Img1 from "../../assets/img/l3.png";

function Nutrition() {
	return (
		<>
			<div className="mainhead">
				<div className="head1">
					<img
						src={Img1}
						alt=""
						className="img2"
					/>
				</div>
				<div className="head3">
					<h1 className="heading">
						Make time for <span className="span">fitness,</span> make time for{" "}
						<span className="span1">nutrition.</span>
					</h1>
				</div>
				<div className="head4">
					<img
						src={Img}
						alt=""
						className="img1"
					/>
				</div>
			</div>
			<div className="detail">
				<h1 className="detail-heading">Nutrition Details</h1>
				<div className="detail-box">
					<div className="detail-box1">
						{/* <h1>Introduction</h1> */}
						<div className="detail-content"></div>
						<div className="detail-content1"></div>
					</div>
					<div className="detail-box2">
						<h1 className="heading3">Better Eat, Better Life</h1>
						<h1 className="heading4">
							If You Get Better Nutrition, You Can Enjoy a Healthy Age
						</h1>
						<p className="pheading">
							Nutrition is the process by which organisms obtain and utilize
							nutrients for growth, energy, and overall health. It plays a
							crucial role in maintaining bodily functions, supporting growth
							and development, and preventing various health issues.
						</p>
						<h1 className="heading5">Benefits of Nutrition</h1>
						<p className="pheading1">
							Energy and Vitality: A balanced diet provides the energy your body
							needs to carry out everyday activities and maintain overall
							vitality.
						</p>
						<p className="pheading1">
							Healthy Weight Management: Proper nutrition helps in achieving and
							maintaining a healthy weight, reducing the risk of obesity and
							related health issues.
						</p>
						<p className="pheading1">
							Strong Immune System: Nutrient-rich foods support the immune
							system, helping the body fend off infections and illnesses.
						</p>
						<p className="pheading1">
							Growth and Development: Adequate nutrition is especially important
							for children and adolescents, as it supports their growth,
							development, and cognitive function.
						</p>
					</div>
				</div>
			</div>
			<div className="maincourses">
				<h1 className="detail-heading">Fitness & Nutrition Courses</h1>
				<div>
					<div className="cardmain">
						<div className="card">
							<img
								className="cardimg"
								src="https://htmldemo.net/nutras/nutras/assets/images/courses/courses-2.jpg"
								alt=""
							/>
							<h1 className="cardheading">Introduction to Food and Health.</h1>
							<button className="cardbtn">View More</button>
						</div>
						<div className="card">
							<img
								className="cardimg"
								src="https://htmldemo.net/nutras/nutras/assets/images/courses/courses-3.jpg"
								alt=""
							/>
							<h1 className="cardheading">
								Nutrition and Lifestyle in Pregnancy
							</h1>
							<button className="cardbtn">View More</button>
						</div>
						<div className="card">
							<img
								className="cardimg"
								src="https://htmldemo.net/nutras/nutras/assets/images/courses/courses-1.jpg"
								alt=""
							/>
							<h1 className="cardheading">Children Nutrition and Cooking</h1>
							<button className="cardbtn">View More</button>
						</div>
					</div>
				</div>
			</div>
			<div className="pricediv">
				<span className="span">
					{" "}
					<h1>Pricing Plans</h1>
				</span>
			</div>
			<div className="pricedivmain">
				<h1 className="priceheading">----Diet Plans----</h1>
				<h1 className="priceheading1"> Our Special Offers Plans</h1>

				<div className="plan">
					<div className="plan1">
						<h1 className="planh1">Body Sculpting</h1>
						<p className="planp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh2">$ 50.00/Rs</h2>
						<h3 className="planh3">Nutritional assessment</h3>
						<h3 className="planh3"> Weight Assessment</h3>
						<h3 className="planh3"> Physical Activities</h3>
						<h3 className="planh3">Meal planning </h3>
						<button className="ybtn1"> Book Now</button>
					</div>
					<div className="plan2">
						<h1 className="planh11">Post Pregnancy</h1>
						<p className="planpp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh2">$ 75.00/Rs</h2>
						<h3 className="planh3">Nutritional assessment</h3>
						<h3 className="planh3"> Weight Assessment</h3>
						<h3 className="planh3"> Physical Activities</h3>
						<h3 className="planh3">Meal planning </h3>
						<button className="ybtn1"> Book Now</button>
					</div>
					<div className="plan3">
						<h1 className="planh1">Weight Loss</h1>
						<p className="planp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh2">$ 99.00/Rs</h2>
						<h3 className="planh3">Nutritional assessment</h3>
						<h3 className="planh3"> Weight Assessment</h3>
						<h3 className="planh3"> Physical Activities</h3>
						<h3 className="planh3">Meal planning </h3>
						<button className="ybtn1"> Book Now</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nutrition;

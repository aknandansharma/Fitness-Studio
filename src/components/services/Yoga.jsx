import React from "react";
//import PlayCircleFilledWhiteTwoToneIcon from "@mui/icons-material/PlayCircleFilledWhiteTwoTone";
import "./Yoga.css";

import Img from "../../assets/img/guy.png";
import Img1 from "../../assets/img/gallery1.jpg";
import Img2 from "../../assets/img/gallery2.jpg";
import Img3 from "../../assets/img/gallery3.jpg";
import Img4 from "../../assets/img/gallery4.jpg";
import Img5 from "../../assets/img/gallery5.jpg";
import Img6 from "../../assets/img/gallery6.jpg";
import Img7 from '../components/assets/img/woman1.jpg';
import Img8 from '../components/assets/img/woman2.jpg';

function Yoga() {
	return (
		<>
		{/* yoga main start */}
			<div className="maindiv">
				<div className="maindiv1">
					<h1 className="heading">Yoga to Release Stress</h1>

					<p className="para">
						Yoga is a way of life, rather than a chore. Counteract the stresses
						of modern life by becoming more mindful and compassionate.
					</p>
					<button className="btn1">Get started</button>
					<button className="btn2">Learn more</button>
				</div>
				<div className="maindiv2">
					<img
						src={Img}
						alt=""
						className="heroimg"
					/>
				</div>
			</div>
			<div>

				{/* yoga main end */}

				{/* yoga divcard start */}
				<div className="divcard">
					<h1 className="heading7">Gallery</h1>

					<div className="maincard">
						<div className="card">
							<img
								src={Img1}
								alt=""
								className="imgcard"
							/>
						</div>
						<div className="card1">
							<img
								src={Img2}
								alt=""
								className="imgcard"
							/>
						</div>
						<div className="card2">
							<img
								src={Img1}
								alt=""
								className="imgcard"
							/>
						</div>
					</div>

					<div className="maincard">
						<div className="card">
							<img
								src={Img4}
								alt=""
								className="imgcard"
							/>
						</div>
						<div className="card1">
							<img
								src={Img5}
								alt=""
								className="imgcard"
							/>
						</div>
						<div className="card2">
							<img
								src={Img6}
								alt=""
								className="imgcard"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* yoga divcard end *--------/}

             {/* yoga courses start */}
			<div className="divcor">
				{/* <img src={Img1} alt="" className='backimg'/> */}
				<h1 className="heading8">Courses Available</h1>
				<h1 className="heading9">--------COURSES-----------</h1>
				<h1 className="heading10">Get the best course at our Savasa Yoga</h1>
			</div>
			<div className="ourcourse">
				<div className="ourcourse1"></div>
				<div className="ourcourse2">
					<h1>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
						varius nibh fermentum velit sollicitudin molestie. Nam ut lectus
						lobortis lorem fermentum mollis sed sit amet lectus.
					</h1>
					<button className="ybtn">Join Our Courses</button>
				</div>
			</div>
			<div className="bigdiv">
				<h3>------ OUR COURSES------</h3>
				<h1>Let go of stress and anxiety</h1>
				<div className="bigdiv11">
					<div className="card11">
						<div className="content">
							<h5 className="headingh5">Asana Yoga</h5>
							<p className="lorem">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
								quidem ex voluptate quis libero! Consequatur!
							</p>
							<button className="readbtn">Read more--</button>
						</div>
					</div>
					<div className="card12">
						<div className="content">
							<h5 className="headingh5">Nature Yoga</h5>
							<p className="lorem">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
								quidem ex voluptate quis libero! Consequatur!
							</p>
							<button className="readbtn">Read more--</button>
						</div>
					</div>
				</div>
				 {/* yoga courses end */}
				<br />
				<br />
				<br />

				{/* yoga courses detail start */}
				<div className="bigdiv11">
					<div className="card13">
						<div className="content">
							<h5 className="headingh5"> Meditation</h5>
							<p className="lorem">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
								quidem ex voluptate quis libero! Consequatur!
							</p>
							<button className="readbtn">Read more--</button>
						</div>
					</div>
					<div className="card14">
						<div className="content">
							<h5 className="headingh5">Body Relaxation</h5>
							<p className="lorem">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
								quidem ex voluptate quis libero! Consequatur!
							</p>
							<button className="readbtn">Read more--</button>
						</div>
					</div>
				</div>
			</div>
			{/* yoga courses detail end */}

			{/* yoga price planning  start */}
			<div className="pricediv">
				<span className="span">
					{" "}
					<h1>Pricing Plans</h1>
				</span>
			</div>
			<div className="pricedivmain">
				<h1 className="priceheading">----PRICING----</h1>
				<h1 className="priceheading1">Price according to quality</h1>

				<div className="plan">
					<div className="plan1">
						<h1 className="planh1">Regular Class</h1>
						<p className="planp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh2">$ 40.00/Rs</h2>
						<h3 className="planh3">Consultation</h3>
						<h3 className="planh3"> 4 Hours Training</h3>
						<h3 className="planh3">Cancel Anytime</h3>
						<h3 className="planh3"> No Hidden Fees</h3>
						<button className="ybtn1"> Get Started</button>
					</div>
					<div className="plan2">
						<h1 className="planh11">Medium Class</h1>
						<p className="planpp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh22">$ 55.00/Rs</h2>
						<h3 className="planh33">Consultation</h3>
						<h3 className="planh33"> 4 Hours Training</h3>
						<h3 className="planh33">Cancel Anytime</h3>
						<h3 className="planh33"> No Hidden Fees</h3>
						<button className="ybtn11"> Get Started</button>
					</div>
					<div className="plan3">
						<h1 className="planh1">Expert Class</h1>
						<p className="planp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh2">$ 70.00/Rs</h2>
						<h3 className="planh3">Consultation</h3>
						<h3 className="planh3"> 4 Hours Training</h3>
						<h3 className="planh3">Cancel Anytime</h3>
						<h3 className="planh3"> No Hidden Fees</h3>
						<button className="ybtn1"> Get Started</button>
					</div>
				</div>
			</div>
			{/* yoga price planning  end */}


			
			{/* <div className='mainblog'>
                
                <div className='blog1'>
                   
                  <button className='btn-ripple'  ><a href="https://www.youtube.com/shorts/Ve65WkGuzv4"><PlayCircleFilledWhiteTwoToneIcon  /></a></button>
                  
                </div>
                <div className='blog1'>

                </div>
            </div> */}
		</>
	);
}

export default Yoga;

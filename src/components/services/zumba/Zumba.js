
import React from "react";
import "./service.css";
import Cover from "../../../assets/services-assets/images/zumbacover.png";
import Img from "../../../assets/services-assets/images/meditationleaningdownI.webp";
import Img2 from "../../../assets/services-assets/images/MeditationHappyPose2.webp";
import Img3 from "../../../assets/services-assets/images/MeditaitonBurmesePose3.webp";
import Img4 from "../../../assets/services-assets/images/MeditationLayingdown4.webp";
import Img5 from "../../../assets/services-assets/images/Meditationa_quick_tip5.webp";
import Img6 from "../../../assets/services-assets/images/MedidationHalfLotus6.webp";


const tiers = [
	{
		title: "Beginner",
		price: "2000",
		description: [
			"Introduction to Meditation",
			"Basic Meditation Techniques",
			"Building a Meditation Routine",
			"Cultivating Inner Calm",
		],
		buttonText: "Join Now",
		buttonVariant: "contained",
	},
	{
		title: "Intermediated",
		subheader: "Most popular",
		price: "3500",
		description: [
			"Deepening Awareness",
			"Emotional Regulation",
			"Mind-Body Connection",
			"Expanding Consciousness",
		],
		buttonText: "Join Now",
		buttonVariant: "contained",
	},
	{
		title: "Advanced",
		price: "5000",
		description: [
			"Insight Meditation",
			"Transcendental Practices",
			"Meditative Inquiry",
			"Teaching and Sharing",
		],
		buttonText: "Join Now",
		buttonVariant: "contained",
	},
];

const Zumba = () => {
	return (
		<div className="all-container">
			<div className="hero banner"
				style={{ padding: "20px" }}
			>
				<div className="me-title2">
					<div
						className="textDesign1"
						style={{ color: "black" }}
					>
						Zumba: Shape your perfect body.
					</div>
					<div className="paraDesign1">
						<p>Experience the exhilarating rhythms and dynamic movements </p>
						<p> of Zumba classes – join us today to dance</p>
						<p> your way to fitness and fun!".</p>
					</div>
					<div
            style={{ marginTop: '2vh', display: 'flex', flexDirection: 'row' }}
          >
            <button className=" bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" style={{ marginRight: '15px' }}>
              Get Started
            </button>
            <button className=" bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More..</button>
          </div>
				</div>
				{
					<img
						className="heroimg"
						src={Cover}
						alt="herobanner"
						style={{ width: "40vw", position: "absolute", right: "0%" }}
					/>
				}
			</div>
			
			<div className="Description banner flex  flex-wrap"
        style={{ marginTop: '15vh', padding: '15px' }}
      >
        <h2 className="textDesign1">
          Pilates Classes
        </h2>

        <div className="pilates flex flex-row">
          <div className="border   m-2">
            <div>
              <p className="textDesign1">01.</p>
              <p className="textDesign1" style={{ fontSize: '25px' }}>
                Guided Pilates for Beginners
              </p>
              <p className="textDesign2" style={{ fontSize: '20px',marginLeft:"5px" }}>
                Our Guided Pilates for Beginners classes are specifically tailored for
                those who are new to meditation. These sessions provide a gentle
                introduction to the practice of meditation, helping participants
                cultivate mindfulness and relaxation. Perfect for individuals looking
                to alleviate stress and learn the fundamentals of meditation.
              </p>
            </div>
          </div>
          <div className="border  m-2">
            <div>
              <p className="textDesign1">02.</p>
              <p className="textDesign1" style={{ fontSize: '25px' }}>
                Intermediate Pilates Practice
              </p>
              <p className="textDesign2" style={{ fontSize: '20px' }}>
                The Intermediate Pilates Practice classes are designed to deepen your
                meditation experience. With a focus on refining mindfulness techniques
                and exploring different meditation approaches, participants in this
                class will enhance their ability to achieve mental clarity and inner calm.
                Prior experience with meditation is recommended.
              </p>
            </div>
          </div>
          <div className="border  m-2">
            <div>
              <p className="textDesign1">03.</p>
              <p className="textDesign1" style={{ fontSize: '25px' }}>
                Advanced Pilates Mastery
              </p>
              <p className="textDesign2" style={{ fontSize: '20px' }}>
                Our Advanced Pilates Mastery classes are intended for seasoned
                meditators who have established a strong foundation in meditation
                techniques. These sessions delve into more advanced practices, offering
                profound insights and an opportunity to attain heightened states of
                awareness. Admission to this level is subject to evaluation by our
                experienced instructors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-us banner">
          <div className="chooseus p-2  border border-black">
            <div className="section-one flex flex-wrap">
              <div >
                <img 
                  className="border rounded-lg shadow-2xl"
                  src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="choose-pic"
                />
              </div>
            </div>
            <div className="section-two flex flex-wrap">
              <div className="ml-5">
                <div className="textDesign1" style={{ color: 'black' }}>
                  WHY CHOOSE US
                </div>
                <div
                  className="textDesign2"
                >
                  Pilates can produce a deep state of relaxation and a tranquil mind.
                </div>
                      <div className='whycard border border-1 rounded-2xl border-gray-600 p-2 w-2/4 mt-20'>
                      <div className="cardpara ">
                          Attract fresh meditators by showcasing meditation's
                          stress-reducing benefits and offering tailored, transformative
                          experiences for inner peace.
                        </div>
                        <button className=" bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl">Click Here to Join</button>
                      </div>
                        
              </div>
            </div>
          </div>
      </div>
      <div className='course banner mt-15 pb-15'>
        <div className="textDesign1 text-center">
          Our Courses
        <span
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: '5px',
              width: '10vw',
              height: '2px',
              backgroundColor: '#595959',
              marginBottom: '9px',
            }}
          ></span>
          </div>
        <div className='course'>
          <div className='coursecardone flex flex-row flex-wrap'>
        
              <div className="card one border border-1 border-gray-500 p-2">
                <img
                  className="card-img rounded-xl"
                  alt="green iguana"
                  src={Img}
                />
                <div className="card-content">
                  <h5 className="card-title">Leaning your back against the wall</h5>
                  <p className="card-text">
                    This is a sitting position for meditation that supports your back.
                    It can be done while leaning back against a wall. You can cross your
                    legs or extend them out in front of you, whichever you feel is most comfortable.
                  </p>
                  <div className="card-buttons flex flex-row justify-end space-x-2 rounded-xl">
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="card two border border-1 border-gray-500 p-2">
                <img
                  className="card-img rounded-xl"
                  alt="green iguana"
                  src={Img2}
                />
                <div className="card-content">
                  <h5 className="card-title">Happy Pose</h5>
                  <p className="card-text">
                    Simplest sitting positions for meditation. Remember how much you liked
                    sitting on the floor as a child cross-legged? This is precisely the same.
                    All you need to take care of is your back being straight. Your hands can
                    rest anywhere on your lap.
                  </p>
                  <div className="card-buttons flex flex-row justify-end space-x-2 rounded-xl mb-5">
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="card three border border-1 border-gray-500 p-2">
                <img
                  className="card-img rounded-xl"
                  alt="green iguana"
                  src={Img3}
                />
                <div className="card-content">
                  <h5 className="card-title">Burmese Pose</h5>
                  <p className="card-text">
                    This is just another variation of sitting cross-legged meditation pose.
                    All you need to do is bring the heel of your left foot towards your
                    right thigh, in a way that it should be touching your thigh, and your
                    right foot should lie gently on the left foot.
                  </p>
                  <div className="card-buttons flex flex-row justify-end space-x-2 rounded-xl">
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
          </div>
          <div className='coursecard flex flex-row flex-wrap'>
          
              <div className="card one border border-1 border-gray-500 p-2">
                <img
                  className="card-img border rounded-xl"
                  alt="green iguana"
                  src={Img4}
                />
                <div className="card-content">
                  <h5 className="card-title">Laying down</h5>
                  <p className="card-text">
                    There are no specific instructions to perform this meditation posture.
                    All you have to do is lay down on a surface making sure your back is straight.
                  </p>
                  <div className="card-buttons flex flex-row justify-end space-x-2 rounded-xl">
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
            
            
              <div className="card two border border-1 border-gray-500 p-2">
                <img
                  className="card-img rounded-xl"
                  alt="green iguana"
                  src={Img5}
                />
                <div className="card-content">
                  <h5 className="card-title">A Quick Tip</h5>
                  <p className="card-text">
                    You can either rest your feet on the ground and join your hands near
                    your chest or keep one foot on the ground and the other on the thigh
                    of the opposite leg, making a triangle-like shape and joining your hand
                    above your head. These meditation positions will stretch your body and relax
                    any tension from your muscles.
                  </p>
                  <div className="card-buttons flex flex-row justify-end space-x-2 rounded-xl">
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
            
            
              <div className="card three border border-1 border-gray-500 p-2">
                <img
                  className="card-img rounded-xl"
                  alt="green iguana"
                  src={Img6}
                />
                <div className="card-content">
                  <h5 className="card-title">Half Lotus</h5>
                  <p className="card-text">
                    This is one of the meditation postures that requires extra focus.
                    This pose is suited for people who want to prepare themselves for deep
                    meditation practice. This pose is almost similar to the quarter lotus pose.
                  </p>
                  <div className="card-buttons flex flex-row justify-end space-x-2 rounded-xl">
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button className="bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>

     

      <div className="container mx-auto mt-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tiers.map((tier, index) => (
            <div key={index} className="card border border-1 border-gray-400">
              <div className="card-header">
                <h3 className="card-title">{tier.title}</h3>
                {tier.subheader && <div className="card-subtitle">{tier.subheader}</div>}
              </div>
              <div className="card-content">
                <div className="flex justify-center items-baseline mb-2">
                  <span className="text-3xl font-semibold">Rs.{tier.price}</span>
                  <span className="ml-1 text-xl">/mo</span>
                </div>
                <ul className="list-disc ml-5">
                  {tier.description.map((line, index) => (
                    <li key={index} className="text-gray-600">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-buttons">
                <button className="btn btn-primary">{tier.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

		</div>
	);

};

export default Zumba;

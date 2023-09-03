import React from "react";
import "./service.css";
import Cover from "../../../assets/services-assets/images/zumbacover.png";
import Img from "../../../assets/services-assets/images/meditationleaningdownI.webp";
import Img2 from "../../../assets/services-assets/images/MeditationHappyPose2.webp";
import Img3 from "../../../assets/services-assets/images/MeditaitonBurmesePose3.webp";
import Img4 from "../../../assets/services-assets/images/MeditationLayingdown4.webp";
import Img5 from "../../../assets/services-assets/images/Meditationa_quick_tip5.webp";
import Img6 from "../../../assets/services-assets/images/MedidationHalfLotus6.webp";
import { useNavigate } from "react-router-dom";



const Zumba = () => {
  const navigate = useNavigate();

	const handleClick = () => {
	  navigate("/notfound");
	};
	return (
		<div className="all-container">
			<div className="hero banner"
			
			>
				<div className="me-title2">
					<div	className="textDesign1 textshadow2"	style={{ color: "black" }}
					>
            <span className='text-5xl' style={{color:"#3B8004"}}>Zumba</span>: Shape your <span style={{color:"#DAA520"}}>perfect body.</span>
						  
					</div>
					<div className="paraDesign1">
						<p>Experience the exhilarating rhythms and dynamic movements </p>
						<p> of Zumba classes – join us today to dance</p>
						<p> your way to fitness and fun!".</p>
					</div>
					<div
            style={{ marginTop: '2vh', display: 'flex', flexDirection: 'row' }}
          >
            <button onClick={handleClick} className=" abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded" style={{ marginRight: '15px' }}>
              Get Started
            </button>
            <button onClick={handleClick} className=" buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Learn More..</button>
          </div>
				</div>
				{
					<img
						className="heroimg"
						src={Cover}
						alt="herobanner"
            style={{ width: '40vw', position: 'absolute', right: '0%',bottom:"30%"}}
					/>
				}
			</div>
			
      <div className="Description banner flex  flex-wrap"
        style={{ marginTop: '15vh', padding: '15px' }}
      >
        <h2 className="textDesign1">
        Zumba Classes
        </h2>

        <div className="pilates flex flex-row">
          <div className="border   m-2">
            <div>
              <p className="textDesign1">01.</p>
              <p className="textDesign1" style={{ fontSize: '25px' }}>
                Guided Zumba for Beginners
              </p>
              <p  style={{ fontSize: '20px',marginLeft:"5px" }}>
                Our Guided Zumba for Beginners classes are specifically tailored for
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
                Intermediate Zumba Practice
              </p>
              <p  style={{ fontSize: '20px' }}>
                The Intermediate Zumba Practice classes are designed to deepen your
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
                Advanced Zumba Mastery
              </p>
              <p  style={{ fontSize: '20px' }}>
                Our Advanced Zumba Mastery classes are intended for seasoned
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
          <div className="chooseus p-2 ">
            <div className="section-one flex flex-wrap w-full md:w-1/2">
              <div >
                <img 
                  className="imgTransform imgT border rounded-lg shadow-2xl"
                  src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="choose-pic"
                />
              </div>
            </div>
            <div className="section-two flex flex-wrap w-full md:w-1/2  flex justify-center">
              <div className="">
                <div className="textDesign1 text-center pr-20">
                  WHY CHOOSE US
                </div>
                <div className="pilatestext w-2/3  mt-8 ml-9 font-serif text-2xl">
                Zumba can produce a deep state of relaxation and a tranquil mind.
                </div>
                      <div className='whycard border border-1 rounded-2xl border-white-300 p-2 w-2/3 mt-16 ml-5'>
                      <div className="cardpara text-3xl font-bold ">
                          Attract fresh meditators by showcasing meditation's
                          stress-reducing benefits and offering tailored, transformative
                          experiences for inner peace.
                        </div>
                        <button onClick={handleClick} className=" buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl">Click Here to Join</button>
                      </div>    
              </div>
            </div>
          </div>
      </div>
      <div className='course banner mt-20 pb-15'>
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
        <div className='course '>
          <div className='coursecardone flex flex-row flex-wrap '>
        
              <div className="cardy one border border-1 border-white-500 p-2 drop-shadow-xl">
                <img
                  className="imgTransform card-img rounded-xl"
                  alt="green iguana"
                  src={Img}
                />
                <div className="card-content">
                  <h5 className="card-title ">Leaning your back against the wall</h5>
                  <p className="card-text p-3">
                    This is a sitting position for meditation that supports your back.
                    It can be done while leaning back against a wall. You can cross your
                    legs or extend them out in front of you, whichever you feel is most comfortable.
                  </p>
                  <div className="card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl">
                    <button onClick={handleClick} className="abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button onClick={handleClick} className="buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="cardy two border border-1 border-white-500 p-2 drop-shadow-xl">
                <img
                  className="imgTransform card-img rounded-xl"
                  alt="green iguana"
                  src={Img2}
                />
                <div className="card-content">
                  <h5 className="card-title">Happy Pose</h5>
                  <p className="card-text p-3">
                    Simplest sitting positions for meditation. Remember how much you liked
                    sitting on the floor as a child cross-legged? This is precisely the same.
                    All you need to take care of is your back being straight. Your hands can
                    rest anywhere on your lap.
                  </p>
                  <div className="card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl">
                    <button onClick={handleClick} className="abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button onClick={handleClick} className="buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="cardy three border border-1 border-white-500 p-2 drop-shadow-xl">
                <img
                  className="imgTransform card-img rounded-xl"
                  alt="green iguana"
                  src={Img3}
                />
                <div className="card-content">
                  <h5 className="card-title">Burmese Pose</h5>
                  <p className="card-text p-3">
                    This is just another variation of sitting cross-legged meditation pose.
                    All you need to do is bring the heel of your left foot towards your
                    right thigh, in a way that it should be touching your thigh, and your
                    right foot should lie gently on the left foot.
                  </p>
                  <div className="card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl">
                    <button onClick={handleClick} className="abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button onClick={handleClick} className="buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
          </div>
          <div className='coursecard flex flex-row flex-wrap'>
          
              <div className="cardy one border border-1 border-white-500 p-2 drop-shadow-xl">
                <img
                  className="imgTransform card-img border rounded-xl"
                  alt="green iguana"
                  src={Img4}
                />
                <div className="card-content">
                  <h5 className="card-title">Laying down</h5>
                  <p className="card-text p-3">
                    There are no specific instructions to perform this meditation posture.
                    All you have to do is lay down on a surface making sure your back is straight.
                  </p>
                  <div className="card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl">
                    <button onClick={handleClick} className="abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button onClick={handleClick} className="buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
            
            
              <div className="cardy two border border-1 border-white-500 p-2 drop-shadow-xl">
                <img
                  className="imgTransform card-img rounded-xl"
                  alt="green iguana"
                  src={Img5}
                />
                <div className="card-content">
                  <h5 className="card-title">A Quick Tip</h5>
                  <p className="card-text p-3">
                    You can either rest your feet on the ground and join your hands near
                    your chest or keep one foot on the ground and the other on the thigh
                    of the opposite leg, making a triangle
                    above your head. These meditation positions will stretch your body and relax
                    any tension from your muscles.
                  </p>
                  <div className="card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl">
                    <button onClick={handleClick} className="abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button onClick={handleClick} className="buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
            
            
              <div className="cardy three  border border-1 border-white-500 p-2 drop-shadow-xl">
                <img
                  className="imgTransform card-img rounded-xl"
                  alt="green iguana"
                  src={Img6}
                />
                <div className="card-content">
                  <h5 className="card-title">Half Lotus</h5>
                  <p className="card-text p-3">
                    This is one of the meditation postures that requires extra focus.
                    This pose is suited for people who want to prepare themselves for deep
                    meditation practice. This pose is almost similar to the quarter lotus pose.
                  </p>
                  <div className="card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl">
                    <button onClick={handleClick} className="abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded ">Share</button>
                    <button onClick={handleClick} className="buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Learn More</button>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>


      {/* <div className='priceCard'>
      <h3 className='textDesign text-center pt-4 text-3xl mt-24'>Price List</h3>
        <div className='flex flex-row flex-wrap gap-6 text-center justify-center mb-10 mt-20'>
  {tiers.map((tier,index)=>(

    <div key={index} className='relative bg-white rounded-lg shadow-md border-2  w-80 h-80 p-6 banner'>
      <h3 className='text-xl font-semibold'>{tier.title}</h3>
      {tier.subheader && <div className='text-gray-600 mt-1'>{tier.subheader}</div>}
      <div className="mt-4">
        <div className="flex justify-center">
          <span className="text-2xl font-semibold">Rs.{tier.price}</span>
          <span className="ml-1 text-lg">/mo</span>
        </div>
        <ul className="list-disc ml-5 mt-2 text-gray-600">
          {tier.description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-3 left-20">
        <button onClick={handleClick} className="px-4 py-2 buttoncode2 hover:bg-gray-500 text-white rounded-full">{tier.buttonText}</button>
      </div>
    </div>
  ))}
        </div>
      </div> */}

      <div className='planprice mt-9'>
        <h2 className=' text-center text-5xl font-extrabold'>Price List</h2>
      </div>
      <div className="plan">
					<div className="plan1">
						<h1 className="planh1">Regular Class</h1>
						<p className="planp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh2">Rs 40.00/Rs</h2>
						<h3 className="planh3">Consultation</h3>
						<h3 className="planh3"> 4 Hours Training</h3>
						<h3 className="planh3">Cancel Anytime</h3>
						<h3 className="planh3"> No Hidden Fees</h3>
						<button onClick={handleClick} className="ybtn1"> Get Started</button>
					</div>
					<div className="plan2">
						<h1 className="planh11">Medium Class</h1>
						<p className="planpp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh22">Rs 55.00/Rs</h2>
						<h3 className="planh33">Consultation</h3>
						<h3 className="planh33"> 4 Hours Training</h3>
						<h3 className="planh33">Cancel Anytime</h3>
						<h3 className="planh33"> No Hidden Fees</h3>
						<button onClick={handleClick} className="ybtn11"> Get Started</button>
					</div>
					<div className="plan3">
						<h1 className="planh1">Expert Class</h1>
						<p className="planp">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2 className="planh2">Rs 70.00/Rs</h2>
						<h3 className="planh3">Consultation</h3>
						<h3 className="planh3"> 4 Hours Training</h3>
						<h3 className="planh3">Cancel Anytime</h3>
						<h3 className="planh3"> No Hidden Fees</h3>
						<button onClick={handleClick} className="ybtn1"> Get Started</button>
					</div>
				</div>
		</div>
	);
};

export default Zumba;

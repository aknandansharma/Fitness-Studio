import React from "react";
import "./Nutrition.css";

import Img from "../../assets/img/n1-removebg-preview.png";
import Img1 from "../../assets/img/l3.png";
import { useNavigate } from "react-router-dom";

function Nutrition() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/notfound");
    };
    return (
        <>
            {/* nutrition start */}
            <div className='hero banner mt-12'>
                <div className='me-title2 ml-5'>
                    <div
                        className='textDesign1 textshadow2'
                        style={{ color: "black" }}>
                        <span style={{ color: "#3B8004" }}>Make time</span> for
                        fitness, make time for{" "}
                        <span className='text-5xl' style={{ color: "#DAA520" }}>
                            Nutrition.
                        </span>
                    </div>
                    <div className='paraDesign1'>
                        <p>
                            It changes and you start feeling good once again;{" "}
                        </p>
                        <p> the good and bad feelings come like waves.</p>
                        <p>
                            Transform your emotions with this beautiful guided
                            for nutrition.
                        </p>
                    </div>
                    <div
                        style={{
                            marginTop: "2vh",
                            display: "flex",
                            flexDirection: "row",
                        }}>
                        <button
                            className='abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded'
                            style={{ marginRight: "15px" }}>
                            Get Started
                        </button>
                        <button className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                            Learn More..
                        </button>
                        <button
                            onClick={handleClick}
                            className='abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded'
                            style={{ marginRight: "15px" }}>
                            Get Started
                        </button>
                        <button
                            onClick={handleClick}
                            className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                            Learn More..
                        </button>
                    </div>
                </div>
                {
                    <img
                        className='heroimg'
                        src={Img}
                        alt='herobanner'
                        style={{
                            width: "40vw",
                            position: "absolute",
                            right: "0%",
                            bottom: "30%",
                        }}
                    />
                }
            </div>
            {/* nutrition end */}

            <div className='choose-us banner p-8'>
                <div className='chooseus flex flex-row flex-wrap justify-center text-center'>
                    <div className='section-one flex flex-wrap w-full md:w-1/2'>
                        <div>
                            <img
                                className='imgTransform imgT border rounded-lg shadow-2xl'
                                src='https://templates.envytheme.com/aava/default/assets/images/about/about-img-1.jpg'
                                alt='choose-pic'
                            />
                        </div>
                    </div>
                    <div className='section-two flex flex-wrap w-full md:w-1/2 flex justify-center'>
                        <div className=''>
                            <div className='textDesign1 '>
                                Nutrition Details
                            </div>
                            <div className='pilatestext mt-8 font-serif text-2xl'>
                                Better Eat, Better Life. If You Get Better
                                Nutrition, You Can Enjoy a Healthy Age.
                            </div>

                            <div className='whycard border border-1 rounded-2xl border-white-300 mt-10'>
                                <div className='cardpara text-3xl font-bold'>
                                    Nutrition is the process by which organisms
                                    obtain and utilize nutrients for growth,
                                    energy, and overall health. It plays a
                                    crucial role in maintaining bodily
                                    functions.
                                </div>
                                <button className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl'>
                                    Click Here to Join
                                </button>
                                <button
                                    onClick={handleClick}
                                    className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl'>
                                    Click Here to Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* nutrition end detail */}

            <div
                className='Description banner flex  flex-wrap'
                style={{ marginTop: "15vh", padding: "15px" }}>
                <h2 className='textDesign1'>Benefits of Nutrition</h2>

                <div className='pilates flex flex-row'>
                    <div className='border   m-2'>
                        <div>
                            <p className='textDesign1'>01.</p>

                            <p
                                className='textDesign1'
                                style={{ fontSize: "20px", marginLeft: "5px" }}>
                                Energy and Vitality: A balanced diet provides
                                the energy your body needs to carry out everyday
                                activities and maintain overall vitality.
                            </p>
                        </div>
                    </div>
                    <div className='border  m-2'>
                        <div>
                            <p className='textDesign1'>02.</p>

                            <p
                                className='textDesign1'
                                style={{ fontSize: "20px" }}>
                                Healthy Weight Management: Proper nutrition
                                helps in achieving and maintaining a healthy
                                weight, reducing the risk of obesity and related
                                health issues.
                            </p>
                        </div>
                    </div>
                    <div className='border  m-2'>
                        <div>
                            <p className='textDesign1'>03.</p>

                            <p
                                className='textDesign1'
                                style={{ fontSize: "20px" }}>
                                Growth and Development: Adequate nutrition is
                                especially important for children and
                                adolescents, as it supports their growth,
                                development, and cognitive function.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* maincourses start */}

            <div className='course banner mt-20 pb-15'>
                <div className='textDesign1 text-center'>
                    Fitness and Nutrition Courses
                    <span
                        style={{
                            display: "inline-block",
                            verticalAlign: "middle",
                            marginLeft: "5px",
                            width: "10vw",
                            height: "2px",
                            backgroundColor: "#595959",
                            marginBottom: "9px",
                        }}></span>
                </div>
                <div className='course '>
                    <div className='coursecardone flex flex-row flex-wrap '>
                        <div className='cardy one border border-1 border-white-500 p-2 drop-shadow-xl'>
                            <img
                                className='imgTransform card-img rounded-xl w-full'
                                alt='green iguana'
                                src='https://htmldemo.net/nutras/nutras/assets/images/courses/courses-2.jpg'
                            />
                            <div className='card-content'>
                                <h5 className='card-title '>
                                    Introduction to Food and Health.
                                </h5>
                                <p className='card-text p-3'>
                                    Exploring the intricate relationship between
                                    nutrition and well-being for a healthier
                                    life.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl'>
                                    <button className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        View More
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='cardy two border border-1 border-white-500 p-2 drop-shadow-xl'>
                            <img
                                className='imgTransform card-img rounded-xl w-full'
                                alt='green iguana'
                                src='https://htmldemo.net/nutras/nutras/assets/images/courses/courses-3.jpg'
                            />
                            <div className='card-content'>
                                <h5 className='card-title'>Happy Pose</h5>
                                <p className='card-text p-3'>
                                    Remember how much you liked All you need to
                                    take care of is your back being straight.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl'>
                                    <button className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        View More
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='cardy three border border-1 border-white-500 p-2 drop-shadow-xl w-full'>
                            <img
                                className='imgTransform card-img rounded-xl'
                                alt='green iguana'
                                src='https://htmldemo.net/nutras/nutras/assets/images/courses/courses-1.jpg'
                            />
                            <div className='card-content'>
                                <h5 className='card-title'>Burmese Pose</h5>
                                <p className='card-text p-3'>
                                    This is just another variation of sitting
                                    cross-legged meditation pose. your right
                                    foot should lie gently on the left foot.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl '>
                                    <button className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        View More
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='choose-us banner p-8 pb-20'>
                <div className='chooseus flex flex-row flex-wrap justify-center text-center'>
                    <div className='section-one flex flex-wrap w-full md:w-1/2'>
                        <div>
                            <img
                                className='imgTransform imgT border rounded-lg shadow-2xl'
                                src='https://media.istockphoto.com/id/1418282970/photo/pretty-woman-looking-to-sideways-while-drinking-fruit-detox-juice-in-the-kitchen-at-home.webp?b=1&s=170667a&w=0&k=20&c=xkAXTEO34Ty629vjBqcIkvW_mq3GHmSSkvLRcTgH1aw='
                                alt='choose-pic'
                            />
                        </div>
                    </div>
                    <div className='section-two flex flex-wrap w-full md:w-1/2'>
                        <div className=''>
                            <div className='textDesign1 text-center pr-20'>
                                Blog-<hr className='border-t-2'></hr>
                            </div>
                            <div className='textDesign1 w-2/3 mt-8 ml-9 font-serif text-2xl'>
                                Unlock your potential with good nutrition.
                            </div>
                            <div className='pilatestext mt-5 font-serif text-2xl'>
                                Lorem can produce a deep state of relaxation and
                                a tranquil mind.
                            </div>
                            <div className='play-btn mt-4 flex flex-row'>
                                <div className=''>
                                    <button>
                                        <i className='fa-solid fa-play'></i>
                                    </button>
                                </div>
                                {/* <div className="items-center ml-20">Intro To Nutrition</div> */}
                            </div>
                            <div className='mb-20'></div>
                        </div>
                    </div>
                </div>
                `{" "}
            </div>

            {/* maincourses end */}

            <div className='planprice mt-9'>
                <h2 className=' text-center text-5xl font-extrabold'>
                    Price List
                </h2>
            </div>
            <div className='plan'>
                <div className='plan1'>
                    <h1 className='planh1'>Regular Class</h1>
                    <p className='planp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <h2 className='planh2'>Rs 40.00/Rs</h2>
                    <h3 className='planh3'>Consultation</h3>
                    <h3 className='planh3'> 4 Hours Training</h3>
                    <h3 className='planh3'>Cancel Anytime</h3>
                    <h3 className='planh3'> No Hidden Fees</h3>
                    <button className='ybtn1'> Get Started</button>
                    <button onClick={handleClick} className='ybtn1'>
                        {" "}
                        Get Started
                    </button>
                </div>
                <div className='plan2'>
                    <h1 className='planh11'>Medium Class</h1>
                    <p className='planpp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <h2 className='planh22'>Rs 55.00/Rs</h2>
                    <h3 className='planh33'>Consultation</h3>
                    <h3 className='planh33'> 4 Hours Training</h3>
                    <h3 className='planh33'>Cancel Anytime</h3>
                    <h3 className='planh33'> No Hidden Fees</h3>
                    <button className='ybtn11'> Get Started</button>
                    <button onClick={handleClick} className='ybtn11'>
                        {" "}
                        Get Started
                    </button>
                </div>
                <div className='plan3'>
                    <h1 className='planh1'>Expert Class</h1>
                    <p className='planp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <h2 className='planh2'>Rs 70.00/Rs</h2>
                    <h3 className='planh3'>Consultation</h3>
                    <h3 className='planh3'> 4 Hours Training</h3>
                    <h3 className='planh3'>Cancel Anytime</h3>
                    <h3 className='planh3'> No Hidden Fees</h3>
                    <button className='ybtn1'> Get Started</button>
                    <button onClick={handleClick} className='ybtn1'>
                        {" "}
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
}

export default Nutrition;

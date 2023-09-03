import React from "react";
import "./Yoga.css";

import Img from "../../../assets/img/guy.png";
import Img1 from "../../../assets/img/gallery1.jpg";
import Img2 from "../../../assets/img/gallery2.jpg";
import Img3 from "../../../assets/img/gallery3.jpg";
import Img4 from "../../../assets/img/gallery4.jpg";
import Img5 from "../../../assets/img/gallery5.jpg";
import Img6 from "../../../assets/img/gallery6.jpg";


import { useNavigate } from "react-router-dom";

function Yoga() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/notfound");
    };

    return (
        <>
            {/* yoga main start */}
            <div className='hero banner mt-12 mb-4 '>
                <div className='me-title2 ml-5'>
                    <div
                        className='textDesign1 textshadow2'
                        style={{ color: "black" }}>
                        <span className=' text-6xl'>
                            <span style={{ color: "#3B8004" }}>Yoga</span> to
                            Release{" "}
                            <span style={{ color: "#DAA520" }}>Stress.</span>{" "}
                        </span>
                    </div>
                    <div className='paraDesign1'>
                        <p>
                            It changes and you start feeling good once again;{" "}
                        </p>
                        <p> the good and bad feelings come like waves.</p>
                        <p>
                            Transform your emotions with this beautiful guided
                            meditation.
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
                            onClick={handleClick}
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
                            width: "20vw",
                            position: "absolute",
                            right: "12%",
                            bottom: "30%",
                        }}
                    />
                }
            </div>

            <div className='course banner mt-20 pb-15'>
                <div className='textDesign1 text-center'>
                    Our Gallery
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
                        <div className='cardy2 one border border-1 border-white-500 p-2 drop-shadow-xl'>
                            <img
                                className='imgTransform card-img rounded-xl'
                                alt='green iguana'
                                src={Img1}
                            />
                        </div>
                        <div className='cardy2 two border border-1 border-white-500 p-2 drop-shadow-xl'>
                            <img
                                className='imgTransform card-img rounded-xl'
                                alt='green iguana'
                                src={Img2}
                            />
                        </div>
                        <div className='cardy2 three border border-1 border-white-500 p-2 drop-shadow-xl'>
                            <img
                                className='imgTransform card-img rounded-xl'
                                alt='green iguana'
                                src={Img3}
                            />
                        </div>
                    </div>
                    <div className='coursecard flex flex-row flex-wrap'>
                        <div className='cardy2 one border border-1 border-white-500 p-2 drop-shadow-xl'>
                            <img
                                className='imgTransform card-img border rounded-xl'
                                alt='green iguana'
                                src={Img4}
                            />
                        </div>

                        <div className='cardy2 two border border-1 border-white-500 p-2 drop-shadow-xl'>
                            <img
                                className='imgTransform card-img rounded-xl'
                                alt='green iguana'
                                src={Img5}
                            />
                        </div>

                        <div className='cardy2 three  border border-1 border-white-500 p-2 drop-shadow-xl'>
                            <img
                                className='imgTransform card-img rounded-xl'
                                alt='green iguana'
                                src={Img6}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* yoga divcard end *--------/}

             {/* yoga courses start */}

            <div className='choose-us banner'>
                <div className='chooseus p-2 pb-4'>
                    <div className='section-one flex flex-wrap w-full md:w-1/2'>
                        <div>
                            <img
                                className='imgTransform imgT border rounded-lg shadow-2xl'
                                src='https://media.istockphoto.com/id/673457266/photo/young-asian-woman-practicing-yoga-at-yoga-healthy-sport-gym.jpg?s=612x612&w=0&k=20&c=lgyvUineK21C4ZejRFRPN2yb-Xsd7PvqXchNXS4tSzk='
                                alt='choose-pic'
                            />
                        </div>
                    </div>
                    <div className='section-two flex flex-wrap w-full md:w-1/2 flex justify-center'>
                        <div className=''>
                            <div className='textDesign1 text-center pr-20'>
                                WHY CHOOSE US
                            </div>
                            <div className='pilatestext w-2/3  mt-8 ml-9 font-serif text-2xl'>
                                Get the best course at our Savasa Yoga.
                            </div>
                            <div className='whycard border border-1 rounded-2xl border-white-300 p-2 w-2/3 mt-16 ml-5'>
                                <div className='cardpara text-3xl font-bold '>
                                    Attract fresh meditators by showcasing
                                    yoga's stress-reducing benefits and offering
                                    tailored, transformative experiences for
                                    inner peace.
                                </div>
                                <button
                                    onClick={handleClick}
                                    className=' buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl'>
                                    Click Here to Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='course banner mt-20 pb-15'>
                <div className='textDesign1 text-center'>
                    Our Courses
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
                    <div className='coursecardone flex flex-row flex-wrap'>
                        <div
                            className='cardy one border border-1 border-white-500 p-2 drop-shadow-xl'
                            style={{ height: "550px" }}>
                            <img
                                className='imgTransform rounded-xl border'
                                style={{ height: "300px", width: "90vh" }}
                                alt='green iguana'
                                src='https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-5EDJ8JT.jpg'
                            />
                            <div className='card-content'>
                                <h5 className='card-title '>Asana Yoga</h5>
                                <p className='card-text p-3'>
                                    This is a sitting position for meditation
                                    that supports your back. It can be done
                                    while leaning back against a wall. Lorem
                                    ipsum dolor sit, amet consectetur
                                    adipisicing elit. Inventore in sunt impedit
                                    ducimus eaque commodi vero! Sapiente eaque
                                    perferendis accusamus.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl'>
                                    <button
                                        onClick={handleClick}
                                        className='abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded '>
                                        Share
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className='cardy two border border-1 border-white-500 p-2 drop-shadow-xl'
                            style={{ height: "550px" }}>
                            <img
                                className='imgTransform card-img rounded-xl'
                                style={{ height: "300px", width: "90vh" }}
                                alt='green iguana'
                                src='https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-K9QEMRY.jpg'
                            />
                            <div className='card-content'>
                                <h5 className='card-title'>Nature Yoga </h5>
                                <p className='card-text p-3'>
                                    Simplest sitting positions for meditation.
                                    Remember how much you liked sitting on the
                                    floor as a child cross-legged? This is
                                    precisely the same. All you need to take
                                    care of is your back being straight. Your
                                    hands can rest anywhere on your lap.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl'>
                                    <button
                                        onClick={handleClick}
                                        className='abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded '>
                                        Share
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className='cardy three border border-1 border-white-500 p-2 drop-shadow-xl'
                            style={{ height: "550px" }}>
                            <img
                                className='imgTransform card-img rounded-xl'
                                style={{ height: "300px", width: "90vh" }}
                                alt='green iguana'
                                src='https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg'
                            />
                            <div className='card-content'>
                                <h5 className='card-title'>Meditation </h5>
                                <p className='card-text p-3'>
                                    This is just another variation of sitting
                                    cross-legged meditation pose. All you need
                                    to do is bring the heel of your left foot
                                    towards your right thigh, in a way that it
                                    should be touching your thigh, and your
                                    right foot should lie gently on the left
                                    foot.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl'>
                                    <button
                                        onClick={handleClick}
                                        className='abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded '>
                                        Share
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='coursecard flex flex-row flex-wrap'>
                        <div
                            className='cardy one border border-1 border-white-500 p-2 drop-shadow-xl'
                            style={{ height: "550px" }}>
                            <img
                                className='imgTransform card-img border rounded-xl'
                                style={{ height: "300px", width: "90vh" }}
                                alt='green iguana'
                                src='https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-at-home-3LBGE59.jpg'
                            />
                            <div className='card-content'>
                                <h5 className='card-title'>Body Relaxation</h5>
                                <p className='card-text p-3'>
                                    There are no specific instructions to
                                    perform this meditation posture. All you
                                    have to do is lay down on a surface making
                                    sure your back is straight.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl'>
                                    <button
                                        onClick={handleClick}
                                        className='abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded '>
                                        Share
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className='cardy two border border-1 border-white-500 p-2 drop-shadow-xl'
                            style={{ height: "550px" }}>
                            <img
                                className='imgTransform card-img rounded-xl'
                                style={{ height: "300px", width: "90vh" }}
                                alt='green iguana'
                                src={Img5}
                            />
                            <div className='card-content'>
                                <h5 className='card-title'>A Quick Tip</h5>
                                <p className='card-text p-3'>
                                    You can either rest your feet on the ground
                                    and join your hands near your chest or keep
                                    one foot on the ground and the other on the
                                    thigh of the opposite leg, making a triangle
                                    above your head. These meditation positions
                                    will stretch your body and relax any tension
                                    from your muscles.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl'>
                                    <button
                                        onClick={handleClick}
                                        className='abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded '>
                                        Share
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className='cardy three  border border-1 border-white-500 p-2 drop-shadow-xl'
                            style={{ height: "550px" }}>
                            <img
                                className='imgTransform card-img rounded-xl'
                                style={{ height: "300px", width: "90vh" }}
                                alt='green iguana'
                                src={Img6}
                            />
                            <div className='card-content'>
                                <h5 className='card-title'>Half Lotus</h5>
                                <p className='card-text p-3'>
                                    This is one of the meditation postures that
                                    requires extra focus. This pose is suited
                                    for people who want to prepare themselves
                                    for deep meditation practice. This pose is
                                    almost similar to the quarter lotus pose.
                                </p>
                                <div className='card-buttons flex flex-row space-x-2 absolute bottom-3 right-3 rounded-xl'>
                                    <button
                                        onClick={handleClick}
                                        className='abutton  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded '>
                                        Share
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='buttoncode2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* yoga price planning  start */}
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
                    <button onClick={handleClick} className='ybtn1'>
                        {" "}
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );

}

export default Yoga;

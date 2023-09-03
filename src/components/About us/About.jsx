import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";

const faqData = [
    { question: 'How much does it cost for membership?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius nibh fermentum velit sollicitudin molestie.' },
    { question: 'What classes do you have?', answer:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius nibh fermentum velit sollicitudin molestie.' },
    { question: 'What types of fitness course do you teach?', answer:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius nibh fermentum velit sollicitudin molestie.' }
    // Add more FAQ entries as needed
  ];

function About() {
    const [openIndex, setOpenIndex] = useState(null);

    

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <>
        {/* about us */}
            <div className='aboutus'>
                <span class='span7'>About Us</span>
            </div>

            <section class='about' id='about'>
                <div class='about-img'>
                    <img
                        src='https://media.istockphoto.com/id/1127485222/photo/gym-training-on-stationary-bikes.jpg?s=612x612&w=0&k=20&c=iBD_Cksse1_7FRoWgnxMI1fz34eheOEUexYzGYIEaDI='
                        alt=''
                    />
                </div>
                <div class='about-content'>
                    <h3>Story About Us</h3>
                    <p>
                        {" "}
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Modi rem nisi vero cumque harum odit quisquam
                        necessitatibus repudiandae commodi, quaerat a nostrum,
                        illum deleniti magni repellat, quidem nihil eaque!
                        Sequi.

                        <div className="play-btn">
								<button ><i className="fa-solid fa-play" href="https://www.youtube.com/watch?v=EO-5Fnh13kw" ></i></button>
                             
							 </div>
                    </p>
<<<<<<< HEAD
                    
                        
                       
=======
                    <Link to='/notfound' class='btn'>
                        Read More
                    </Link>
>>>>>>> 13ac7574f5915f702e7e477efe059d792ae64701
                </div>
            </section>
          {/* about us  end*/}

          {/* faq start */}
            <div className='faqdiv'>
                <div className='faq-img'>
                    <img
                        src='https://media.istockphoto.com/id/1330784998/photo/group-of-people-listening-to-a-presentation.webp?b=1&s=170667a&w=0&k=20&c=9kGkTr5x5OvzU4TKaEQHIwr8POvNimbQtm-88V81hHg='
                        alt=''
                    />
                </div>
                <div className='dropdown-faq'>
                    <h1 className='faqheading'> Frequently Asked Questions</h1>
                    <br />
                    <ul>
                        {faqData.map((item, index) => (
                            <li key={index}>
                                <button
                                    className='faq-question'
                                    onClick={() => toggleFAQ(index)}>
                                    {item.question}
                                </button>
                                {openIndex === index && (
                                    <p className='faq-answer'>{item.answer}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mainfaq-div'>
                <h1 className='faqheading1'>FAQS</h1>
                <h1 className='faqheading2'>Regular Questions</h1>
                <p className='faqheading3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae eius neque labore vero fugiat sit voluptates libero
                    quis nostrum non consectetur !
                </p>
                <div className='faqdisplay'>
                    <div className='faqdisplay1'>
                        <ul>
                            {faqData.map((item, index) => (
                                <li key={index}>
                                    <button
                                        className='faq-question'
                                        onClick={() => toggleFAQ(index)}>
                                        {item.question}
                                    </button>
                                    {openIndex === index && (
                                        <p className='faq-answer'>
                                            {item.answer}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='faqdisplay1'>
                        <ul>
                            {faqData.map((item, index) => (
                                <li key={index}>
                                    <button
                                        className='faq-question'
                                        onClick={() => toggleFAQ(index)}>
                                        {item.question}
                                    </button>
                                    {openIndex === index && (
                                        <p className='faq-answer'>
                                            {item.answer}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* faq end */}

            {/* terms and condition start */}
            <div className='termbody'>
                <div className='terms-box'>
                    <div className='terms-text'>
                        <h1>Terms And Conditions</h1>
                        <br />
                        <p>Last Edit: 25/08/2023</p>
                        <br />
                        <p>Greetings Users,</p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, et corporis quo dicta nulla sunt
                            rem tempore ullam quas eveniet facilis esse iusto
                            quasi tempora veniam provident doloremque, dolor
                            excepturi.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, et corporis quo dicta nulla sunt
                            rem tempore ullam quas eveniet facilis esse iusto
                            quasi tempora veniam provident doloremque, dolor
                            excepturi.
                        </p>
                        <br />

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, et corporis quo dicta nulla sunt
                            rem tempore ullam quas eveniet facilis esse iusto
                            quasi tempora veniam provident doloremque, dolor
                            excepturi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, et corporis quo dicta nulla sunt
                            rem tempore ullam quas eveniet facilis esse iusto
                            quasi tempora veniam provident doloremque, dolor
                            excepturi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, et corporis quo dicta nulla sunt
                            rem tempore ullam quas eveniet facilis esse iusto
                            quasi tempora veniam provident doloremque, dolor
                            excepturi.
                        </p>
                    </div>
                    <h4>
                        I Agree to the <span>Terms and Condition</span>and i
                        read the Privacy Notice.
                    </h4>
                    <br />
                    <div className='buttons'>
                        <button className='btn21'>Accept</button>
                        <button className='btn22'>Decline</button>
                    </div>
                </div>
            </div>
            {/* terms and condition end */}
        </>
    );
}

export default About;

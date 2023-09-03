// import React from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useRef, useState } from "react";
// import "./Header.css";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/OIP2.png";
// //import Yoga from "../services/Yoga";


// const Header = () => {
// 	const navRef = useRef();
// 	const [dropdownVisible, setDropdownVisible] = useState(false);

// 	const toggleDropdown = () => {
// 		setDropdownVisible(!dropdownVisible);
// 	};
// 	const showNavbar = () => {
// 		navRef.current.classList.toggle("responsive_nav");
// 	};
// 	return (
// 		<header>
// 			<a href="/">
// 			<img src={logo} className="HeaderLogo" alt="logo" />
// 			</a>
// 			<nav ref={navRef}>
			
// 				<NavLink  to="/">Home</NavLink> 
// 				<NavLink  to="/about">About</NavLink>
// 				<div
// 					className={`dropdown ${dropdownVisible ? "active" : ""}`}
// 					onMouseEnter={toggleDropdown}
// 					onMouseLeave={toggleDropdown}
// 				>
// 					<NavLink  to="/services">Services</NavLink>
// 					{dropdownVisible && (
// 						<div className="dropdown-content ">
// 							<NavLink  to="/services/yoga">Yoga</NavLink>

// 							<NavLink  to="/services/pilates/Pilates">Pilates</NavLink>
// 							<NavLink  to="/services/meditation/Meditation">Meditation</NavLink>
// 							<NavLink  to="/services/nutrition">Nutrition</NavLink>
// 							<NavLink  to="/services/zumba/Zumba">Zumba</NavLink>

// 						</div>
// 					)}
// 				</div>

// 				<NavLink  to="/contact">Contact</NavLink>
// 				<NavLink className='enrollNowBTN' to="/enroll">Enroll Now</NavLink>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}
// 				>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}
// 			>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// };

// export default Header;
import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/OIP2.png";
import "./Header.css";

const Header = () => {
  const navRef = useRef();
  const [dropdownVisible, setDropdownVisible] = useState(false);
 
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
		};
  const closeNav = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <a href="/">
        <img src={logo} className="HeaderLogo" alt="logo" />
      </a>
      <nav ref={navRef}>
        <NavLink to="/" onClick={closeNav}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeNav}>
          About
        </NavLink>
        <div
          className={`dropdown ${dropdownVisible ? "active" : ""}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <NavLink to="/services/services/Services">
            Services
          </NavLink>
          {dropdownVisible && (
            <div className="dropdown-content">
              <NavLink to="/services/yoga/Yoga" onClick={closeNav}>
                Yoga
              </NavLink>
              <NavLink to="/services/pilates/Pilates" onClick={closeNav}>
                Pilates
              </NavLink>
              <NavLink to="/services/meditation/Meditation" onClick={closeNav}>
                Meditation
              </NavLink>
              <NavLink to="/services/nutrition/Nutrition" onClick={closeNav}>
                Nutrition
              </NavLink>
              <NavLink to="/services/zumba/Zumba" onClick={closeNav}>
                Zumba
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/contact" onClick={closeNav}>
          Contact
        </NavLink>
        <NavLink className="enrollNowBTN" to="/enroll" onClick={closeNav}>
          Enroll Now
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={closeNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;


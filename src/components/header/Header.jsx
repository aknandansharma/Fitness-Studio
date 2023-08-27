import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/OIP2.png";
import Yoga from "../services/Yoga";


const Header = () => {
	const navRef = useRef();
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	return (
		<header>
			<a href="/">
			<img src={logo} className="HeaderLogo" alt="logo" />
			</a>
			<nav ref={navRef}>
			{/* // i am change to "/home" to "/" because i want to show home page first @aknandan */}
				<NavLink  to="/">Home</NavLink> 
				<NavLink  to="/about">About</NavLink>
				<div
					className={`dropdown ${dropdownVisible ? "active" : ""}`}
					onMouseEnter={toggleDropdown}
					onMouseLeave={toggleDropdown}
				>
					<NavLink  to="/services">Services</NavLink>
					{dropdownVisible && (
						<div className="dropdown-content ">
							<NavLink  to="/services/yoga">Yoga</NavLink>
							<NavLink  to="/services/pilates">Pilates</NavLink>
							<NavLink  to="/services/meditation">Meditation</NavLink>
							<NavLink  to="/services/nutrition">Nutrition</NavLink>
							<NavLink  to="/services/zumba">Zumba</NavLink>
						</div>
					)}
				</div>

				<NavLink  to="/contact">Contact</NavLink>
				<NavLink className='enrollNowBTN' to="/enroll">Enroll Now</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}
				>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}
			>
				<FaBars />
			</button>
		</header>
	);
};

export default Header;

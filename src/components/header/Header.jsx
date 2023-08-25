import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/OIP.jpeg";

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
			<img src={logo} />
			<nav ref={navRef}>
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<div
					className={`dropdown ${dropdownVisible ? "active" : ""}`}
					onMouseEnter={toggleDropdown}
					onMouseLeave={toggleDropdown}
				>
					<NavLink to="/services">Services</NavLink>
					{dropdownVisible && (
						<div className="dropdown-content">
							<NavLink to="/yoga">Yoga</NavLink>
							<NavLink to="/pilates">Pilates</NavLink>
							<NavLink to="/meditation">Meditation</NavLink>
							<NavLink to="/nutrition">Nutrition</NavLink>
							<NavLink to="/zumba">Zumba</NavLink>
						</div>
					)}
				</div>

				<NavLink to="/contact">Contact</NavLink>
				<NavLink to="/enroll">Enroll Now</NavLink>
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

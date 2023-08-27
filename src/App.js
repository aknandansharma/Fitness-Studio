import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Scroll from "./components/scroll/Scroll";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import About from "./components/About us/About";
import Contact from "./components/contact us/Contact";
import Footer from "./components/footer/Footer";
import EnrollNow from "./components/Enroll Now/EnrollNow";
import Register from "./components/Enroll Now/pages/Register";
import Login from "./components/Enroll Now/pages/Login";
import Discount from "./components/Enroll Now/pages/Discount";
import UserDetails from "./components/Enroll Now/pages/UserDetails";
import Yoga from "./components/services/Yoga";
import Pilates from "./components/services/pilates/Pilates";
import Meditation from "./components/services/meditation/Meditation";
import Nutrition from "./components/services/Nutrition";
import Zumba from "./components/services/zumba/Zumba";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Scroll />
			<Routes>
				<Route
					path="/" // i am change to "/home" to "/" because i want to show home page first @aknandan
					element={<Home />}
				/>

				// start of services path
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/services/yoga"
					element={<Yoga />}
				/>
				<Route
					path="/services/pilates/Pilates"
					element={<Pilates />}
				/> 
				<Route
					path="/services/meditation/Meditation"
					element={<Meditation />}
				/>
				<Route
					path="/services/nutrition"
					element={<Nutrition />}
				/>
				<Route
					path="/services/zumba/Zumba"
					element={<Zumba />}
				/>

				
				<Route
					path="/about"
					element={<About />}
				/>

				// start of contact us path
				<Route
					path="/contact"
					element={<Contact />}
				/>

				// This is All indside Enroll Now path
				<Route
					path="/enroll"
					element={<EnrollNow />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/discount"
					element={<Discount />}
				/>
				<Route
					path="/userdetails"
					element={<UserDetails />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;

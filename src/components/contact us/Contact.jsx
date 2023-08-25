import React from "react";
import "./Contact.css";
import contact from "../../assets/contact-us.jpg";

const Contact = () => {
	return (
		<div className="contact-container">
			<img src={contact} />
			<p>
				If you have any questions or inquiries, feel free to get in touch with
				us.
			</p>
			<div className="contact-content">
				<div className="contact-info">
					<p>Email: fitness@center.com</p>
					<p>Phone: (123) 456-7890</p>
					<p>Address: 647 Linda Street Phoenixvilla, 121002, India</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;

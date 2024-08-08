import "../styles/Contact.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import { Checkmark } from "react-checkmark";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "emailjs-com";

function Contact() {
	const [formData, setFormData] = useState({
		from_name: "",
		reply_email: "",
		message: "",
		errors: {},
		loading: false,
		success: false
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const validateForm = () => {
		const errors = {};
		const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

		if (!formData.from_name) {
			errors.name = "Name is required.";
		}

		if (!formData.reply_email || !emailRegex.test(formData.reply_email)) {
			errors.email = "A valid email is required.";
		}

		if (!formData.message) {
			errors.message = "Message cannot be empty.";
		}

		setFormData((prevState) => ({ ...prevState, errors }));
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (validateForm()) {
			setFormData((prevState) => ({ ...prevState, loading: true }));

			try {
				await emailjs.sendForm(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
					event.target,
					process.env.REACT_APP_EMAILJS_USER_ID
				);

				setFormData({
					from_name: "",
					reply_email: "",
					message: "",
					errors: {},
					loading: false,
					success: true
				});

				setTimeout(() => {
					setFormData((prevState) => ({ ...prevState, success: false }));
				}, 2500);

				toast.success("Email sent successfully!", {
					position: "top-center",
					autoClose: 3000
				});
			} catch (error) {
				console.error("Email sending failed:", error);
				setFormData((prevState) => ({
					...prevState,
					loading: false,
					success: false
				}));
				toast.error("Failed to send email. Please try again.");
			}
		}
	};

	return (
		<motion.div
			className="Contact"
			animate={{ opacity: 1, x: 0 }}
			initial={{ opacity: 0, x: 50 }}
			exit={{ opacity: 0, x: -50 }}
		>
			<h1 className="contact-title">Contact Me</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="from_name">Name</label>
					<input
						id="from_name"
						className="form-input"
						type="text"
						name="from_name"
						value={formData.from_name}
						onChange={handleChange}
					/>
					{formData.errors.name && (
						<p className="form-error">{formData.errors.name}</p>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="reply_email">Email</label>
					<input
						id="reply_email"
						className="form-input"
						type="text"
						name="reply_email"
						value={formData.reply_email}
						onChange={handleChange}
					/>
					{formData.errors.email && (
						<p className="form-error">{formData.errors.email}</p>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						className="form-input"
						name="message"
						value={formData.message}
						onChange={handleChange}
					/>
					{formData.errors.message && (
						<p className="form-error">{formData.errors.message}</p>
					)}
				</div>

				<div className="form-indicator">
					{!formData.loading && !formData.success && (
						<button
							type="submit"
							className="form-submit"
							disabled={
								!formData.from_name ||
								!formData.reply_email ||
								!formData.message
							}
						>
							Submit
						</button>
					)}
					{formData.loading && !formData.success && (
						<ColorRing
							visible={true}
							height="80"
							width="80"
							ariaLabel="loading"
							colors={["#C0C9BA", "#C0C9BA", "#C0C9BA", "#C0C9BA", "#C0C9BA"]}
						/>
					)}
					{formData.success && <Checkmark size="large" color="#C0C9BA" />}
				</div>
			</form>
			<ToastContainer />
		</motion.div>
	);
}

export default Contact;

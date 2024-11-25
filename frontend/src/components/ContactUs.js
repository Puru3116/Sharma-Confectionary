import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message, please try again.');
            });
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <form onSubmit={sendEmail}>
                <label>Phone: 9878558138</label><br></br>
                <label>Email: vijaysharmadbn@gmail.com</label>
                <textarea name="message" placeholder="Your message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
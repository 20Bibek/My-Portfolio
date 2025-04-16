import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { GrSend } from "react-icons/gr";
import contactimg from './assets/contactimg.png'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0r56s4d',
        'template_mnk400a',
        form.current,
        'xZatxx1FXLL-5TcQD'
      )
      .then(() => {
        alert('Message sent!');
        form.current.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="contact-section">
      <div className="contact-form-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">I’d love to hear from you! Share your thoughts or just say hi 👋</p>
        <form ref={form} onSubmit={sendEmail} className="styled-form">
          <div className="floating-label">
            <input type="text" name="user_name" required />
            <label>Your Name</label>
          </div>
          <div className="floating-label">
            <input type="email" name="user_email" required />
            <label>Your Email</label>
          </div>
          <div className="floating-label">
            <textarea name="message" required rows="5"></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit" className="send-button">Send Message <GrSend /></button>
        </form>
      </div>

      <div className="contact-image-side">
        <img
          src={contactimg}
          alt="Contact Visual"
        />
      </div>
    </section>
  );
};

export default Contact;

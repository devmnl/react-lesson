import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xp39tvi', 'template_knira0g', e.target, 'eTG3X_GMH58K2n77h')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!'); // Adiciona feedback para o usuário
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.'); // Feedback de erro
            });
    };

    return (
        <footer id='contact' className="footer">
            <div className="footer-container">
                {/* Seção de Contato */}
                <div className="contact-section">
                    <h2>Contact Us</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <span>dev.mnlfranco@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                            <span>(11) 9-32590460</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                            <span>Rua Pará, 269 - Guararema, SP</span>
                        </div>
                    </div>
                </div>

                {/* Formulário de Contato */}
                <div className="form-section">
                    <h2>Send a Message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>

                {/* Redes Sociais */}
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/devmnl/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/devmnl" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://wa.me/+5511932590460" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


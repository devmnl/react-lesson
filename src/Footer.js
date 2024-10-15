import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';

// Configuração do modal
Modal.setAppElement('#root'); // Certifique-se de definir o elemento raiz do seu app

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controle do modal
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' }); // Estado para os campos do formulário

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Atualiza o estado do formulário
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xp39tvi', 'template_knira0g', e.target, 'eTG3X_GMH58K2n77h')
      .then((result) => {
        console.log(result.text);
        setModalIsOpen(true); // Abre o modal ao enviar com sucesso
        setFormData({ user_name: '', user_email: '', message: '' }); // Limpa os campos do formulário
      }, (error) => {
        console.error(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalIsOpen(false);
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
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
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

        {/* Modal de Confirmação */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Confirmation Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>Message Sent!</h2>
          <p>Your message has been sent successfully. We will get back to you shortly.</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </footer>
  );
};

export default Footer;




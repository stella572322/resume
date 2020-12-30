import React from 'react';

const ContactList = () => (
  <div className="contact-info">
    <p>
      <i className="fas fa-paper-plane fa-lg"></i>
      <a href="mailto:krebikshaw@gmail.com" target="_blank" rel="noopener noreferrer">krebikshaw@gmail.com</a>
    </p>
    <p>
      <i className="fas fa-phone-alt fa-lg"></i>
      <a href="tel:+996-911-277-811">+886 911 277 811</a>
    </p>
    <p className="resume">
      <i className="far fa-file-alt fa-lg"></i>
      <a href="./Yakim_Resume.pdf" download="Yakim_Resume">resume (pdf)</a>
    </p>
  </div>
);

export default ContactList;

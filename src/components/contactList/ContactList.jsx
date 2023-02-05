import React from 'react';

const ContactList = () => (
  <div className="contact-info">
    <p>
      <i className="fas fa-paper-plane fa-lg"></i>
      <a href="mailto:yuxiangsu0220@gmail.com" target="_blank" rel="noopener noreferrer">yuxiangsu0220@gmail.com</a>
    </p>
    <p>
      <i className="fas fa-phone-alt fa-lg"></i>
      <a href="tel:+996-911-277-811">+886 980 517 778</a>
    </p>
    <p className="resume">
      <i className="far fa-file-alt fa-lg"></i>
      <a target="_blank" rel="noopener noreferrer" href="https://stella572322.github.io/resume/SsuChiehChen_Resume.pdf" download="SsuChieh_Resume">resume (pdf)</a>
    </p>
		<p>
			<i className="fas fa-file-alt fa-lg"></i>
			<a href="https://stella572322.github.io/portfolio/" rel="noopener noreferrer" target="_blank">作品集網站</a>
		</p>
  </div>
);

export default ContactList;

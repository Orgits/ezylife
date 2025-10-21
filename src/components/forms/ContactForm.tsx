'use client';

import React from 'react';

const ContactForm = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} id="contact-form">
        <div className="row">
          <div className="col-md-12">
            <div className="tp-contact-input">
              <input name="name" type="text" placeholder="Your Name" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <input name="email" type="email" placeholder="Email Here" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea name="message" placeholder="Message Here"></textarea>
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-breadcrumb-btn">
              <button type="submit" className="tp-btn">SUBMIT</button> 
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

import React from 'react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-neutral-300 mb-12 max-w-2xl">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="max-w-lg">
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;

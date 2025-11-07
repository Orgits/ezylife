
"use client";
import React from 'react';

const GoogleMap = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-contact-map-area {
            margin-bottom: 80px !important;
          }
          
          .tp-contact-map iframe {
            width: 100% !important;
            height: 350px !important;
          }
        }
        
        @media (max-width: 767px) {
          .tp-contact-map-area {
            margin-bottom: 60px !important;
            padding: 0 15px;
          }
          
          .tp-contact-map iframe {
            height: 300px !important;
          }
        }
        
        @media (max-width: 575px) {
          .tp-contact-map-area {
            margin-bottom: 50px !important;
            padding: 0 10px;
          }
          
          .tp-contact-map iframe {
            height: 250px !important;
          }
        }
      `}</style>
      <div className="tp-contact-map-area map-margin" style={{'marginBottom': '120px'}}>
        <div className="tp-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9746157479634!2d77.21906407549893!3d28.63424108493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b5f6f5e5%3A0x6c8f7e8f7e8f7e8f!2sHimalaya%20House%2C%20Kasturba%20Gandhi%20Marg%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
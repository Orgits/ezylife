

"use client";
import React from 'react';


const CtaAreaHomeOne = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-cta-bg-wrapper {
            padding: 40px 20px !important;
          }
          
          .tp-cta-title {
            font-size: 24px !important;
            line-height: 1.3 !important;
            margin-bottom: 25px;
            text-align: center;
          }
          
          .tp-cta-email {
            margin-top: 20px;
            display: flex !important;
            flex-direction: column !important;
            position: static !important;
          }
          
          .tp-cta-email input {
            width: 100% !important;
            margin-bottom: 15px;
            padding: 12px 15px !important;
            font-size: 14px !important;
            position: static !important;
          }
          
          .tp-cta-email button {
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            position: static !important;
            top: auto !important;
            right: auto !important;
          }
        }
        
        @media (max-width: 767px) {
          .tp-cta-bg-wrapper {
            padding: 30px 15px !important;
            margin: 0 15px;
          }
          
          .tp-cta-title {
            font-size: 20px !important;
            line-height: 1.4 !important;
            margin-bottom: 20px;
          }
          
          .tp-cta-email {
            display: flex !important;
            flex-direction: column !important;
            position: static !important;
          }
          
          .tp-cta-email input {
            padding: 10px 12px !important;
            font-size: 13px !important;
            position: static !important;
          }
          
          .tp-cta-email button {
            padding: 10px 15px !important;
            font-size: 13px !important;
            position: static !important;
            top: auto !important;
            right: auto !important;
          }
          
          .tp-cta-email button span {
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 575px) {
          .tp-cta-bg-wrapper {
            padding: 25px 12px !important;
            margin: 0 10px;
          }
          
          .tp-cta-title {
            font-size: 18px !important;
            line-height: 1.5 !important;
            margin-bottom: 15px;
          }
          
          .tp-cta-email {
            margin-top: 15px;
            display: flex !important;
            flex-direction: column !important;
            position: static !important;
          }
          
          .tp-cta-email input {
            padding: 8px 10px !important;
            font-size: 12px !important;
            margin-bottom: 12px;
            position: static !important;
          }
          
          .tp-cta-email button {
            padding: 8px 12px !important;
            font-size: 12px !important;
            position: static !important;
            top: auto !important;
            right: auto !important;
          }
          
          .tp-cta-email button span {
            font-size: 12px !important;
          }
          
          .tp-cta-email button span i {
            margin-right: 5px;
          }
        }
      `}</style>
      <section className="tp-cta-area p-relative">
        {/* <div className="tp-cta-bg"></div> */}
        <div className="container">
          <div className="tp-cta-bg-wrapper p-relative" style={{ backgroundImage: `url(/assets/img/cta/bg-shape.png)` }}>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="tp-cta-title">Get notified about the event! <br /> Subscribe today</h3>
              </div>
              <div className="col-lg-6">
                <div className="tp-cta-email p-relative">
                  <input type="email" placeholder="Email Address" />
                    <button> <span><i className="fa-solid fa-envelope"></i> Subscribe</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaAreaHomeOne;
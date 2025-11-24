
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Link from 'next/link';
import AboutAreaHomeOne from '../homes/multi-page/home/AboutAreaHomeOne';
import FaqAreaHomeOne from '../homes/multi-page/home/FaqAreaHomeOne';
import ProcessAreaHomeOne from '../homes/multi-page/home/ProcessAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/multi-page/home/TestimonialAreaHomeOne';
import TeamAreaHomeOne from '../homes/multi-page/home/TeamAreaHomeOne';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
       <section className="breadcrumb__area pt-165 pb-150 p-relative z-index-1 fix">
          <div className="breadcrumb__bg" style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5) 60% , #4ad353ff ), url('/assets/img/breadcrumb/trade.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: "top",
          }}></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="breadcrumb__content">
                  <h3 className="breadcrumb__title">About Us</h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="breadcrumb__content">
                  <div className="breadcrumb__list text-center text-sm-end">
                    <span><Link href="/">Home</Link></span>
                    <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                    <span>About-Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutAreaHomeOne />
        <FaqAreaHomeOne />
        <ProcessAreaHomeOne />
        <TestimonialAreaHomeOne />
        <TeamAreaHomeOne style={true} />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default About;
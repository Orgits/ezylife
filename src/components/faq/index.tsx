

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Link from 'next/link';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import FaqArea from './FaqArea';

const FAQ = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <section className="breadcrumb__area pt-165 pb-150 p-relative z-index-1 fix">
          <div className="breadcrumb__bg" style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5) 60% , #4ad353ff ), url('/assets/img/breadcrumb/Faq Banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="breadcrumb__content">
                  <h3 className="breadcrumb__title"> FAQ? - <br/> (Frequently Asked Questions)</h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="breadcrumb__content">
                  <div className="breadcrumb__list text-center text-sm-end">
                    <span><Link href="/">Home</Link></span>
                    <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                    <span>Faq</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default FAQ;
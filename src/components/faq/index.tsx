

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

        <div style={{
          textAlign: 'center',
          marginTop : '50px',
          marginBottom : '0px',
          paddingBottom : '0px', 
          fontSize: '36px', 
          fontWeight: '700'
        }}>
          <h2><b>Frequently Asked Questions</b></h2>
        </div>
        <FaqArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default FAQ;

import ServicesDetails from '@/components/services-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Services Details - Ezylife Financial Services | Investment & Tax Insights.",
};

const index = () => {
  return (
    <Wrapper>
      <ServicesDetails />
    </Wrapper>
  );
};

export default index;
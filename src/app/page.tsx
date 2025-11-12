
import HomeOne from '@/components/homes/multi-page/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "EzyLife - Make Your Life Easy",
};


const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default index;
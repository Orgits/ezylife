

import Blog from '@/components/blogs/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Blog - Ezylife Financial Services | Investment & Tax Insights.",
}

const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;
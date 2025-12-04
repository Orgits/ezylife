import ServicesDetails from '@/components/services-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Services Details - Ezylife Financial Services | Investment & Tax Insights.",
};

const ServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Wrapper>
      <ServicesDetails serviceId={params.id} />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
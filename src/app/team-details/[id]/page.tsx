import TeamDetails from '@/components/team-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Team Details - Ezylife Financial Services",
};

interface PageProps {
  params: {
    id: string;
  };
}

const TeamDetailsPage = ({ params }: PageProps) => {
  return (
    <Wrapper>
      <TeamDetails teamId={parseInt(params.id)} />
    </Wrapper>
  );
};

export default TeamDetailsPage;
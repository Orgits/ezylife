
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Link from 'next/link';

// import Breadcrumb from '../common/Breadcrumb';
import TeamDetailsArea from './TeamDetailsArea';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

interface TeamDetailsProps {
  teamId?: number;
}

const TeamDetails = ({ teamId }: TeamDetailsProps) => {
  return (
    <>
      <HeaderOne />
      <main>    
      <section className="breadcrumb__area pt-165 pb-150 p-relative z-index-1 fix" style={{ backgroundColor: '#4dae52ff' }}>
        <div className="breadcrumb__bg" style={{ backgroundImage: "url(/assets/img/breadcrumb/bg.png)" }}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="breadcrumb__content">
                <h3 className="breadcrumb__title">Team Details</h3>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="breadcrumb__content">
                <div className="breadcrumb__list text-center text-sm-end">
                  <span><Link href="/">Home</Link></span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                  <span>Team Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <TeamDetailsArea teamId={teamId} />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default TeamDetails;
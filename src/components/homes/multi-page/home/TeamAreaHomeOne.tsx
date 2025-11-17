"use client";
import { TeamSocialLinks } from "@/components/common/SocialLinks";
import team_data from "@/data/TeamData";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const TeamAreaHomeOne = ({ style }: any) => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-team-area {
            padding-bottom: 80px !important;
          }
          
          .tp-team-title-wrapper {
            margin-top: 2rem !important;
            margin-bottom: 30px !important;
          }
          
          .tp-team-item {
            margin-bottom: 30px;
          }
          
          .tp-team-item-thumb img {
            width: 100% !important;
            height: 300px !important;
            object-fit: cover;
          }
        }
        
        @media (max-width: 767px) {
          .tp-team-area {
            padding-bottom: 60px !important;
          }
          
          .tp-section-title {
            font-size: 28px !important;
            line-height: 1.4 !important;
            margin-bottom: 20px;
            letter-spacing: -0.3px;
          }
          
          .tp-team-title-wrapper {
            margin-top: 1.5rem !important;
          }
          
          .tp-team-item-thumb img {
            width: 100% !important;
            height: 250px !important;
            max-width: 350px !important;
            object-fit: cover;
          }
          
          .tp-team-info h4 {
            font-size: 18px !important;
            line-height: 1.4 !important;
            margin-bottom: 8px;
            letter-spacing: 0.1px;
          }
          
          .tp-team-info p {
            font-size: 15px !important;
            line-height: 1.5 !important;
            letter-spacing: 0.1px;
          }
          
          .tp-team-social {
            padding: 8px !important;
          }
          
          .tp-team-social a {
            width: 30px !important;
            height: 30px !important;
            font-size: 12px !important;
            margin: 0 3px !important;
          }
        }
        
        @media (max-width: 575px) {
          .tp-team-area {
            padding-bottom: 50px !important;
          }
          
          .tp-section-title {
            font-size: 24px !important;
            line-height: 1.5 !important;
            letter-spacing: -0.2px;
          }
          
          .tp-section-title-pre {
            font-size: 14px !important;
            margin-bottom: 10px;
            letter-spacing: 0.3px;
          }
          
          .tp-team-title-wrapper {
            margin-top: 1rem !important;
            margin-bottom: 25px !important;
          }
          
          .tp-team-item {
            margin-bottom: 25px;
          }
          
          .tp-team-item-thumb img {
            width: 100% !important;
            height: 220px !important;
            max-width: 280px !important;
            object-fit: cover;
          }
          
          .tp-team-info {
            padding: 15px !important;
          }
          
          .tp-team-info h4 {
            font-size: 17px !important;
            line-height: 1.4 !important;
            letter-spacing: 0.1px;
          }
          
          .tp-team-info p {
            font-size: 14px !important;
            line-height: 1.5 !important;
            letter-spacing: 0.1px;
          }
          
          .tp-team-info p {
            font-size: 12px !important;
          }
          
          .col-lg-3.col-md-6.col-sm-8.col-10 {
            max-width: 280px;
            margin: 0 auto 25px auto;
          }
        }
      `}</style>
      <section
        className={`tp-team-area pb-120 ${
          style ? "pt-120" : ""
        } tp-team-item-margin`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-title-wrapper text-center mb-40" style={{marginTop: '4rem'}}>
                <span
                  className="tp-section-title-pre"
                  style={{
                    background:
                      "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  our team{" "}
                </span>
                <h3 className="tp-section-title">
                  Leading the way in business <br /> transformation
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {team_data.slice(0, 4).map((item, index) => (
              <Fragment key={index}>
                {item.home === 1 && (
                  <div key={index} className="col-lg-3 col-md-6 col-sm-8 col-10">
                    <div
                      className="tp-team-item p-relative wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay={item.delay}
                    >
                      <div className="tp-team-item-thumb">
                        <Link href={`/team-details/${item.id}`}>
                          <Image
                            src={item.img}
                            style={{ width: "100%", height: "auto" }}
                            alt={`${item.title} - ${item.designation}`}
                            height={400}
                            width={400}
                          />
                        </Link>
                      </div>
                      <div className="tp-team-social">
                        <TeamSocialLinks />
                      </div>
                      <div className="tp-team-info text-center">
                        <h4 className="tp-team-info-title">
                          <Link href={`/team-details/${item.id}`}>{item.title}</Link>
                        </h4>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamAreaHomeOne;

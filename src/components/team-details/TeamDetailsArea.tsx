import React from "react";
import SocialLinks from "../common/SocialLinks";
import team_data from "@/data/TeamData";
import Image from "next/image";

interface TeamDetailsAreaProps {
  teamId?: number;
}

const TeamDetailsArea = ({ teamId }: TeamDetailsAreaProps) => {
  // Find the team member by ID, default to first member if not found
  const teamMember = team_data.find(member => member.id === teamId) || team_data[0];
  
  // Fallback data if team member doesn't have complete information
  const defaultSkills = [
    { title: "Financial Expertise", value: 90 },
    { title: "Client Relations", value: 85 },
    { title: "Professional Excellence", value: 88 }
  ];
  
  const defaultFeatures = [
    "Certified Financial Professional",
    "Expert in financial planning and advisory",
    "Committed to client success",
    "Years of industry experience"
  ];

  const name = teamMember?.title || "Team Member";
  const info = teamMember?.designation || "Financial Advisor";
  const description = teamMember?.description || "Dedicated financial professional committed to helping clients achieve their financial goals through expert guidance and personalized service.";
  const phone = teamMember?.phone || "+91-11-45584780";
  const email = teamMember?.email || "info@ezylife.in";
  const website = teamMember?.website || "https://www.ezylife.in";
  const address = teamMember?.address || "Office No. 74D, 7th Floor, Himalaya House, KG Marg, New Delhi – 110001";
  const skill_des = teamMember?.bio || "Professional with extensive experience in financial services, dedicated to providing comprehensive financial solutions and building long-term client relationships.";
  const progress = teamMember?.skills || defaultSkills;
  const outher_title = "Professional Skills";
  const features = teamMember?.features || defaultFeatures;
  const sm_info = teamMember?.bio || "Committed to excellence in financial advisory services with a focus on client satisfaction and long-term financial success.";
  return (
    <>
      <section className="tp-team-details-breadcrumb-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tp-team-details-thumb mb-85">
                <Image
                  src={teamMember?.img || "/placeholder-team.jpg"}
                  style={{ width: "100%", height: "auto" }}
                  alt={`${name} - ${info}`}
                  width={400}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tp-team-details-wrapper mb-85">
                <h3 className="tp-team-details-name">{name}</h3>
                <span
                  className="tp-team-details-description"
                  style={{
                    background:
                      "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {info}
                </span>
                <p>{description}</p>
                <div className="tp-team-details-information">
                  <h4>
                    <span>Phone :</span> <a href={`tel:${phone}`}>{phone}</a>
                  </h4>
                  <h4>
                    <span>Email :</span>{" "}
                    <a href={`mailto:${email}`}>{email}</a>
                  </h4>
                  <h4>
                    <span>Website :</span>{" "}
                    <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                  </h4>
                  <h4>
                    <span>Address :</span>{" "}
                    <a href="https://www.google.com/maps">{address}</a>
                  </h4>
                </div>
                <div className="tp-team-details-social">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="tp-team-details-skills fix">
                <h3 className="tp-team-details-title">{outher_title}</h3>
                <p>{skill_des}</p>
                <div className="tp-team-details-skills-progress">
                  {progress.map((item, index) => (
                    <div key={index} className="tp-team-details-progress-item">
                      <div className="tp-team-details-progress-title p-relative">
                        <h5>
                          {item.title}{" "}
                          <span
                            className={`pursent-${
                              index === 0 ? "1" : index === 1 ? "2" : "3"
                            } wow slideInLeft`}
                            data-wow-duration=".8s"
                            data-wow-delay=".3s"
                          >
                            {item.value}%
                          </span>
                        </h5>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration=".8s"
                          data-wow-delay=".3s"
                          role="progressbar"
                          style={{ width: `${item.value}%` }}
                          aria-valuenow={item.value} // Use a number here
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="tp-team-details-value">
                <h3 className="tp-team-details-title">{outher_title}</h3>
                <ul>
                  {features.map((item, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-check"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                <p>{sm_info}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;

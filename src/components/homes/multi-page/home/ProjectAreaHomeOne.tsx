"use client";
import project_data from "@/data/ProjectData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const projects = project_data.filter((item) => item.home === 1);

const ProjectAreaHomeOne = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section id="project-one-page" className="tp-project-area pb-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-project-title-wrapper text-center mb-30 mt-4">
                <span
                  className="tp-section-title-pre"
                  style={{
                    background:
                      "linear-gradient(90deg,  #4CAF50 0%, #89e550ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  our latest project
                </span>
                <h3 className="tp-section-title">
                  Together we can achieve <br /> anything
                </h3>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="tp-project-tab-wrapper">
                <ul
                  className="nav nav-pills mb-5 justify-content-center wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                  id="pills-tab"
                  role="tablist"
                >
                  {projects.map((item, index) => (
                    <li className="nav-item" role="presentation" key={index}>
                      <button
                        className={`nav-link ${index === activeTab ? "active" : ""}`}
                        onClick={() => setActiveTab(index)}
                        type="button"
                        role="tab"
                      >
                        {item.tab_name}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  {projects.map((item, index) => (
                    <div
                      key={index}
                      className={`tab-pane ${index === activeTab ? "active" : ""}`}
                      style={{ display: index === activeTab ? 'block' : 'none' }}
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4">
                          <div className="tp-project-thumb">
                            {typeof item.tab_items[0].img === 'string' ? (
                              <img
                                src={item.tab_items[0].img}
                                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                                alt={item.tab_items[0].name}
                              />
                            ) : (
                              <Image
                                src={item.tab_items[0].img}
                                width={400}
                                height={350}
                                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                                alt={item.tab_items[0].name}
                                priority={true}
                              />
                            )}
                            <div className="tp-project-thumb-info">
                              <p>{item.tab_items[0].title}</p>
                              <h4 className="tp-project-thumb-title">
                                {/* <Link href="#"> */}
                                  {item.tab_items[0].name}
                                {/* </Link> */}
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4">
                          <div className="tp-project-thumb">
                            {typeof item.tab_items[1].img === 'string' ? (
                              <img
                                src={item.tab_items[1].img}
                                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                                alt={item.tab_items[1].name}
                              />
                            ) : (
                              <Image
                                src={item.tab_items[1].img}
                                width={400}
                                height={350}
                                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                                alt={item.tab_items[1].name}
                                priority={true}
                              />
                            )}
                            <div className="tp-project-thumb-info">
                              <p>{item.tab_items[1].title}</p>
                              <h4 className="tp-project-thumb-title">
                                {/* <Link href="#"> */}
                                  {item.tab_items[1].name}
                                {/* </Link> */}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectAreaHomeOne;

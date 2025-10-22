"use client";

import React from "react";
import Image from "next/image";
// service details images import here
import service_details_img_1 from "@/assets/img/service/service-details/img-1.jpg";
import service_details_img_2 from "@/assets/img/service/service-details/img-2.jpg";
import features_icon_1 from "@/assets/img/service/service-details/icon-1.svg";
import features_icon_2 from "@/assets/img/service/service-details/icon-2.svg";
import features_doc from "@/assets/img/service/service-details/icon-3.svg";

// service details data types
interface ServiceFeature {
  title: string;
  items: string[];
}

interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  what_we_offer: ServiceFeature;
  why_choose: ServiceFeature;
  img: any;
}

interface DataType {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  features: {
    img: any;
    title: string;
    sm_des: string;
  }[];
  title_2: string;
  sm_des_3: string;
  sm_des_4: string;
  quote: string;
  service_title: string;
  service_list: {
    title: string;
    link: string;
  }[];
  some_list: string[];
}
// service details content
const service_details_data: ServiceDetail[] = [
  {
    id: 1,
    title: "Equity & Derivatives Trading",
    description:
      "Ezylife provides seamless access to the Indian stock market through NSE and BSE, offering both equity and derivatives trading solutions tailored for beginners and seasoned investors.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Equity Trading: Buy and sell shares of publicly listed companies with ease.",
        "Derivatives Trading: Trade in futures and options for hedging, speculation, and portfolio optimization.",
        "Intraday & Delivery Strategies: Flexible trading options to meet short-term and long-term investment objectives.",
        "Research-Backed Insights: Benefit from expert market research, tips, and daily updates from our in-house analysts.",
        "Risk Management Tools: Use stop-loss, limit orders, and derivatives strategies to manage risk effectively.",
        "Advanced Trading Platforms: User-friendly interfaces with real-time market data, charting tools, and analytics.",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife for Equity & Derivatives",
      items: [
        "Expert guidance from Chartered Accountants & Market Analysts.",
        "Access to cutting-edge trading platforms.",
        "Transparent brokerage and support throughout the trading process.",
        "Comprehensive solutions for wealth growth and risk management.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 2,
    title: "Mutual Funds & SIPs",
    description:
      "Ezylife helps you invest in mutual funds and systematic investment plans (SIPs) to build wealth steadily and efficiently.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Wide AMC Coverage: Access all leading Asset Management Companies (AMCs) across equity, debt, hybrid, and tax-saving funds.",
        "SIP Planning: Structured investment approach for disciplined wealth creation.",
        "Goal-Based Investment: Tailored strategies for retirement, education, property, and other financial goals.",
        "Risk Profiling & Asset Allocation: Customized solutions according to your risk appetite and time horizon.",
        "Portfolio Review & Rebalancing: Regular assessment and reallocation to optimize returns and mitigate risks.",
        "Tax-Saving Solutions: ELSS and other tax-efficient mutual fund investments.",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife for Mutual Funds & SIPs",
      items: [
        "Guidance from Chartered Accountants for tax optimization.",
        "Transparent, unbiased investment recommendations.",
        "Simplified online and offline investment process.",
        "Long-term wealth creation with disciplined planning.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 3,
    title: "IPO Investments",
    description:
      "Ezylife provides end-to-end support for Initial Public Offerings (IPOs), helping you participate in new and emerging opportunities in the stock market.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "IPO Application Assistance: Guidance to apply for upcoming IPOs and follow subscription processes.",
        "Pre-IPO Research: Detailed analysis of company fundamentals, valuation, and market potential.",
        "SME IPO Guidance: Special focus on high-growth Small and Medium Enterprise IPOs.",
        "Transparency & Compliance: Ensure all applications and transactions are fully compliant with SEBI regulations.",
        "Post-Listing Advisory: Monitor performance and advise on profit booking or holding strategies.",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife for IPO Investments",
      items: [
        "Expert insights for informed investment decisions.",
        "Access to all leading IPOs, including SME segments.",
        "Step-by-step support from application to post-listing management.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 4,
    title: "Bonds & Debentures",
    description:
      "Ezylife offers fixed-income investment options for conservative investors seeking predictable returns and portfolio diversification.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Government Securities & Corporate Bonds: Safe and high-credit-quality investment opportunities.",
        "Debenture Investments: Options for both secured and unsecured debentures.",
        "Interest Income & Maturity Planning: Structured returns to meet regular income requirements.",
        "Tax Planning: Optimize returns using tax-efficient bonds and interest income strategies.",
        "Custom Investment Solutions: Tailored to risk appetite, financial goals, and liquidity needs.",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife for Bonds & Debentures",
      items: [
        "Expert advice from CAs for risk and tax optimization.",
        "Access to a wide range of corporate and government debt instruments.",
        "Safe and reliable options for portfolio diversification.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 5,
    title: "Portfolio Advisory",
    description:
      "Ezylife's Portfolio Advisory services help clients design, monitor, and optimize their investments to achieve financial goals with confidence.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Personalized Wealth Management: Custom strategies based on financial goals, risk tolerance, and investment horizon.",
        "Asset Allocation & Diversification: Optimized portfolios across equities, bonds, mutual funds, and alternative assets.",
        "Performance Monitoring: Regular review of portfolio performance with actionable recommendations.",
        "Tax & Retirement Integration: Advisory integrates tax planning and retirement goals for holistic financial planning.",
        "Research-Driven Advice: Leverage market insights, sectoral trends, and analytical reports for informed decision-making.",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife for Portfolio Advisory",
      items: [
        "Access to professional Chartered Accountant and financial advisor expertise.",
        "Strategic, goal-oriented investment approach.",
        "Continuous monitoring and periodic rebalancing for optimal returns.",
        "Simplified investment planning — 'Makes Your Life Easy'.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 6,
    title: "Financial Planning",
    description:
      "At Ezylife, we help you make informed decisions to achieve your financial goals through comprehensive Financial Planning services, backed by expert advice from our Chartered Accountants (CAs).",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Goal-Based Planning",
        "Investment Strategy",
        "Tax Planning & Optimization",
        "Risk Management",
        "Retirement Planning Integration",
        "Regular Reviews & Adjustments",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife for Financial Planning",
      items: [
        "Advice from experienced Chartered Accountants, ensuring expert and compliant solutions.",
        "Tailored, transparent, and actionable financial strategies.",
        "Proactive planning for tax, investment, and wealth management.",
        "Simplifying complex financial decisions — 'Makes Your Life Easy'.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 7,
    title: "Retirement Planning",
    description:
      "Our Retirement Planning services help you build a financially independent and comfortable life after retirement.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Goal-Based Planning",
        "Investment Solutions",
        "Tax Efficiency",
        "Regular Reviews",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife",
      items: [
        "Tailored advice from Chartered Accountants & Financial Experts.",
        "Focus on long-term wealth creation and risk management.",
        "Simple, transparent, and actionable strategies — 'Makes Your Life Easy'.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 8,
    title: "Portfolio Management Services (PMS)",
    description:
      "Ezylife offers professional Portfolio Management Services (PMS) for investors seeking customized investment strategies and superior portfolio growth.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Personalized Portfolio",
        "Expert Management",
        "Diverse Instruments",
        "Performance Tracking",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife PMS",
      items: [
        "Access to institutional-grade investment strategies.",
        "Continuous market research and risk management.",
        "Simplified investment process with expert guidance — 'Makes Your Life Easy'.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 9,
    title: "Insurance Services",
    description:
      "Ezylife provides comprehensive insurance solutions to protect you and your family against uncertainties.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Life Insurance",
        "Term Insurance",
        "Health Insurance",
        "Customized Solutions",
        "Expert Guidance",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife for Insurance",
      items: [
        "Access to multiple insurance providers and plans under one roof.",
        "Expert advice from Chartered Accountants, ensuring tax efficiency and compliance.",
        "Simplified and transparent process — 'Makes Your Life Easy'.",
        "Ongoing support for policy management, renewals, and claims.",
      ],
    },
    img: service_details_img_1,
  },
  {
    id: 10,
    title: "Tax Planning",
    description:
      "Ezylife helps you optimize your taxes legally and efficiently with expert guidance from our Chartered Accountants (CAs). Our goal is to minimize your tax liability while ensuring compliance with all laws and regulations.",
    what_we_offer: {
      title: "What We Offer",
      items: [
        "Income Tax Planning: Strategies to reduce tax burden for individuals, professionals, and business owners.",
        "Corporate Tax Planning: Efficient tax structuring for companies, including compliance with GST, TDS, and other statutory requirements.",
        "Investment-Linked Tax Planning: Maximize tax benefits from mutual funds, insurance, pension schemes, and other investments.",
        "Advanced Planning for NRIs: Specialized advice for Non-Resident Indians on income, remittances, and cross-border taxation.",
        "Regular Updates & Compliance: Ensure you stay compliant with the latest tax laws and notifications.",
      ],
    },
    why_choose: {
      title: "Why Choose Ezylife for Tax Planning",
      items: [
        "Expert guidance from experienced Chartered Accountants.",
        "Tailored, actionable strategies for tax savings and wealth optimization.",
        "Simplified solutions to complex tax matters — 'Makes Your Life Easy'.",
        "End-to-end support from planning to filing and compliance.",
      ],
    },
    img: service_details_img_1,
  },
];

// Default service details for backward compatibility
const service_details: DataType = {
  title: "Industry stan Developing",
  sm_des_1:
    "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non",
  sm_des_2:
    "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis no vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo",
  features: [
    {
      img: features_icon_1,
      title: "Analysis Data",
      sm_des:
        "Lorem Ipsum is simply is dumiom in thi yadvice design in us repairs and  is text Lorem Ipsum is simply design company  text Lorem Ipsum",
    },
    {
      img: features_icon_2,
      title: "Delivary Customer",
      sm_des:
        "Lorem Ipsum is simply is dumiom in thi yadvice design in us repairs and  is text Lorem Ipsum is simply design company  text Lorem Ipsum",
    },
  ],
  title_2: "Expert test matters",
  sm_des_3:
    "Aliquam eros justo, posu ere loborti viver lao reet matti ullam corpe.Aliquam eros justo, posuere lobortis non",
  sm_des_4:
    "Aliquam eros justo, posuere loboh viverra laoreet matti ullamcorper posuere viverr.Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper.",
  quote:
    "Aliquam eros justo, posuere loborti viverra laoreet matti uacorper posuere viverra .Aliquam eros no justo des posuere lobortis non, viverra laoreet ue mattis fermentum ullamcorper viverra laoreet. Aliquam eros industry posuere loborti viverra laoreet matti ullamcorpe",
  service_title: "Our service",
  service_list: [
    { title: "Equity & Derivatives Trading", link: "/services-details/1" },
    { title: "Mutual Funds & SIPs", link: "/services-details/2" },
    { title: "IPO Investments", link: "/services-details/3" },
    { title: "Bonds & Debentures", link: "/services-details/4" },
    { title: "Portfolio Advisory", link: "/services-details/5" },
  ],
  some_list: [
    "Mistakes To Avoid to dum",
    "Startup industry stan Aliquam",
    "Knew About Fots text posuere",
  ],
};
// Get top 5 services for sidebar
const top_services = service_details_data.slice(0, 5).map((service) => ({
  title: service.title,
  link: `/services-details/${service.id}`,
}));

const ServiceDetailsArea = ({ serviceId }: { serviceId?: string }) => {
  // If serviceId is provided, find the corresponding service details
  const currentService = serviceId
    ? service_details_data.find(
        (service) => service.id.toString() === serviceId
      )
    : null;

  // If no service is found or no serviceId is provided, use default service details
  const {
    title,
    sm_des_1,
    sm_des_2,
    features,
    title_2,
    sm_des_3,
    sm_des_4,
    quote,
    service_list,
    service_title,
    some_list,
  } = service_details;
  return (
    <>
      <section className="tp-service-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tp-service-details-wrapper">
                <div className="tp-service-details-thumb">
                  <Image
                    src={service_details_img_1}
                    style={{ width: "100%", height: "auto" }}
                    alt="image-title-here"
                  />
                </div>
                <h3 className="tp-service-details-title">
                  {currentService ? currentService.title : title}
                </h3>
                <p>{currentService ? currentService.description : sm_des_1}</p>
                {!currentService && <p>{sm_des_2}</p>}

                {currentService ? (
                  <div className="tp-service-details-features mb-60">
                    <style jsx>{`
                      .tp-service-details-subtitle {
                        font-size: 24px;
                        font-weight: 600;
                        margin-bottom: 20px;
                        color: #16243e;
                      }

                      .service-list {
                        margin-bottom: 30px;
                      }

                      .service-list li {
                        font-size: 16px;
                        margin-bottom: 12px;
                        display: flex;
                        align-items: flex-start;
                      }

                      .circle-icon {
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        background: linear-gradient(
                          90deg,
                          #6af363 0%,
                          #0dee36 100%
                        );
                        margin-right: 12px;
                        display: inline-block;
                        flex-shrink: 0;
                        margin-top: 6px;
                      }
                    `}</style>

                    <h3 className="tp-service-details-subtitle">
                      {currentService.what_we_offer.title}
                    </h3>
                    <ul className="service-list">
                      {currentService.what_we_offer.items.map((item, index) => (
                        <li key={index}>
                          <span className="circle-icon"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="tp-service-details-subtitle">
                      {currentService.why_choose.title}
                    </h3>
                    <ul className="service-list">
                      {currentService.why_choose.items.map((item, index) => (
                        <li key={index}>
                          <span className="circle-icon"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="tp-service-details-box d-flex mb-60">
                    {features.map((item, index) => (
                      <div
                        key={index}
                        className={`tp-service-details-item d-flex ${
                          index === 0 ? "mr-30" : ""
                        }`}
                      >
                        <div className="tp-service-details-icon">
                          <Image src={item.img} alt="image-title-here" />
                        </div>
                        <div className="tp-service-details-content">
                          <h3 className="tp-service-details-subtitle">
                            {item.title}
                          </h3>
                          <p>{item.sm_des}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {!currentService && (
                  <>
                    <div className="tp-service-details-box-2 d-flex mb-40">
                      <div className="tp-service-details-box-content mr-30">
                        <h3 className="tp-service-details-subtitle-2">
                          {title_2}
                        </h3>
                        <p>{sm_des_3}</p>
                        <p>{sm_des_4}</p>
                      </div>
                      <div className="tp-service-details-box-thumb">
                        <Image
                          src={service_details_img_2}
                          alt="image-title-here"
                        />
                      </div>
                    </div>

                    <div className="tp-service-details-quote">
                      <span>{quote}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-service-widget">
                <div className="tp-service-widget-item mb-40">
                  <div className="tp-service-widget-tab">
                    <h3 className="tp-service-widget-title">{service_title}</h3>
                    <ul>
                      {top_services.map((item, index) => (
                        <li
                          key={index}
                          className={
                            serviceId && parseInt(serviceId) === index + 1
                              ? "active"
                              : ""
                          }
                        >
                          <a href={item.link}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="tp-service-widget-contact mb-40"
                  style={{
                    backgroundImage: `url(/assets/img/service/service-details/img-3.jpg)`,
                  }}
                >
                  <div className="tp-service-widget-contact-content text-center">
                    <div className="tp-service-widget-contact-icon">
                      <span>
                        <i
                          className="fa-solid fa-phone"
                          style={{
                            background:
                              "linear-gradient(90deg, #6af363 0%, #0dee36 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        ></i>
                      </span>
                    </div>
                    <p>Requesting A Call:</p>
                    <a href="tel:55555555">000 555-0129</a>
                  </div>
                </div>

                <div className="tp-service-widget-download mb-40">
                  <a href="#">
                    <span>
                      Download Profile
                      <Image src={'/assets/img/process/pdf.png'} alt="icon" width={40} height={40} />
                    </span>
                  </a>
                </div>

                <div className="tp-service-widget-list">
                  <div className="tp-service-widget-list-content">
                    <ul className="service-list">
                      <style jsx>{`
                        .service-list li {
                          font-size: 16px;
                          margin-bottom: 12px;
                          display: flex;
                          align-items: flex-start;
                        }

                        .circle-icon {
                          width: 12px;
                          height: 12px;
                          border-radius: 50%;
                          background: linear-gradient(
                            90deg,
                            #6af363 0%,
                            #0dee36 100%
                          );
                          margin-right: 12px;
                          display: inline-block;
                          flex-shrink: 0;
                          margin-top: 6px;
                        }
                      `}</style>
                      {some_list.map((item, i) => (
                        <li key={i}>
                          <span className="circle-icon"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsArea;

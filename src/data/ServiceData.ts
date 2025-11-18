import  ServiceIconOne  from '@/svg/home-1/ServiceIconOne';


import { StaticImageData } from "next/image";

import service_img_2 from "@/assets/img/service/home-2/img-3.jpg";
import service_img_1 from "@/assets/img/service/img-3.jpg";
import service_img_3 from "@/assets/img/service/home-2/img-3.jpg";
import service_img_4 from "@/assets/img/service/home-2/img-4.jpg";

import service_icon_1 from "@/assets/img/service/home-2/icon-1.svg";
import service_icon_2 from "@/assets/img/service/home-2/icon-2.svg";
import service_icon_3 from "@/assets/img/service/home-2/icon-3.svg";
import service_icon_4 from "@/assets/img/service/home-2/icon-4.svg";

import service_thumb_img_1 from "@/assets/img/service/img-2.jpg";
import service_thumb_img_2 from "@/assets/img/service/img-2.jpg";
import service_thumb_img_3 from "@/assets/img/service/img-3.jpg";


interface DataType {
  id: number;
  home: number | string;
  img: StaticImageData | any;
  icon?: StaticImageData | any;
  category?: string;
  title: string;
  sm_des?: string;
  delay: string;
}[]

const service_data: DataType[] = [
  {
    id: 1,
    home: 2,
    img: service_img_1,
    icon: service_icon_1,
    category: "Our services",
    title: "Equity & Derivatives Trading",
    sm_des: "Ezylife provides seamless access to the Indian stock market through NSE and BSE, offering both equity and derivatives trading solutions tailored for beginners and seasoned investors.",
    delay: ".3s",
  },
  {
    id: 2,
    home: 2,
    img: service_img_2,
    icon: service_icon_2,
    category: "Our services",
    title: "Mutual Funds & SIPs",
    sm_des: "Ezylife helps you invest in mutual funds and systematic investment plans (SIPs) to build wealth steadily and efficiently.",
    delay: ".5s",
  },
  {
    id: 3,
    home: 2,
    img: service_img_3,
    icon: service_icon_3,
    category: "Our services",
    title: "IPO Investments",
    sm_des: "Ezylife provides end-to-end support for Initial Public Offerings (IPOs), helping you participate in new and emerging opportunities in the stock market.",
    delay: ".7s",
  },
  {
    id: 4,
    home: 2,
    img: service_img_4,
    icon: service_icon_4,
    category: "Our services",
    title: "Bonds & Debentures",
    sm_des: "Ezylife offers fixed-income investment options for conservative investors seeking predictable returns and portfolio diversification.",
    delay: ".9s",
  },

  // service page
  {
    id: 1,
    home: 'service',
    img: "/services/equity_and_derivatives_trading.png",
    title: "Equity & Derivatives Trading",
    sm_des: "Ezylife provides seamless access to the Indian stock market through NSE and BSE, offering both equity and derivatives trading solutions tailored for beginners and seasoned investors.",
    delay: ".3s",
  },
  {
    id: 2,
    home: 'service',
    img: "/services/mutualfunds_and_sips.png",
    title: "Mutual Funds & SIPs",
    sm_des: "Ezylife helps you invest in mutual funds and systematic investment plans (SIPs) to build wealth steadily and efficiently.",
    delay: ".5s",
  },
  {
    id: 3,
    home: 'service',
    img: "/services/ipo_investments.png",
    title: "IPO Investments",
    sm_des: "Ezylife provides end-to-end support for Initial Public Offerings (IPOs), helping you participate in new and emerging opportunities in the stock market.",
    delay: ".7s",
  },
  {
    id: 4,
    home: 'service',
    img: "/services/bonds_and_debentures.png",
    title: "Bonds & Debentures",
    sm_des: "Ezylife offers fixed-income investment options for conservative investors seeking predictable returns and portfolio diversification.",
    delay: ".3s",
  },
  {
    id: 5,
    home: 'service',
    img: "/services/portfolio_advisory.png",
    title: "Portfolio Advisory",
    sm_des: "Ezylife's Portfolio Advisory services help clients design, monitor, and optimize their investments to achieve financial goals with confidence.",
    delay: ".5s",
  },
  {
    id: 6,
    home: 'service',
    img: "/services/financial_planning.jpg",
    title: "Financial Planning",
    sm_des: "At Ezylife, we help you make informed decisions to achieve your financial goals through comprehensive Financial Planning services, backed by expert advice from our Chartered Accountants (CAs).",
    delay: ".7s",
  },
  {
    id: 7,
    home: 'service',
    img: "/services/retirement_planning.jpg",
    title: "Retirement Planning",
    sm_des: "Our Retirement Planning services help you build a financially independent and comfortable life after retirement.",
    delay: ".3s",
  },
  {
    id: 8,
    home: 'service',
    img: "/services/portfolio_management_services.jpg",
    title: "Portfolio Management Services (PMS)",
    sm_des: "Ezylife offers professional Portfolio Management Services (PMS) for investors seeking customized investment strategies and superior portfolio growth.",
    delay: ".5s",
  },
  {
    id: 9,
    home: 'service',
    img: "/services/insurance_services.jpg",
    title: "Insurance Services",
    sm_des: "Ezylife provides comprehensive insurance solutions to protect you and your family against uncertainties.",
    delay: ".7s",
  },
  {
    id: 10,
    home: 'service',
    img: "/services/tax_planning.jpg",
    title: "Tax Planning",
    sm_des: "Ezylife helps you optimize your taxes legally and efficiently with expert guidance from our Chartered Accountants (CAs). Our goal is to minimize your tax liability while ensuring compliance with all laws and regulations.",
    delay: ".3s",
  },
];


export default service_data
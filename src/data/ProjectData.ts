import { StaticImageData } from "next/image";

import project_img_1 from "@/assets/img/project/img-1.jpg";
import project_img_2 from "@/assets/img/project/img-2.jpg";
import project_img_3 from "@/assets/img/project/img-3.jpg";

import project_img_4 from "@/assets/img/project/img-5.jpg";
import project_img_5 from "@/assets/img/project/img-7.jpg";
import project_img_6 from "@/assets/img/project/img-9.jpg";
import project_img_7 from "@/assets/img/project/img-11.jpg";

import project_img_8 from "@/assets/img/project/img-15.jpg";
import project_img_10 from "@/assets/img/project/img-3.jpg";
import project_img_11 from "@/assets/img/project/img-4.jpg";
import project_img_13 from "@/assets/img/project/img-6.jpg";
import project_img_14 from "@/assets/img/project/img-8.jpg";
import project_img_15 from "@/assets/img/project/img-10.jpg";
import project_img_16 from "@/assets/img/project/img-12.jpg";

import project_img_17 from "@/assets/img/project/img-14.jpg";
import project_img_18 from "@/assets/img/project/img-13.jpg";


// home 03 imgages 
import project_img_3_1 from "@/assets/img/project/home-3/img-1.jpg";
import project_img_3_2 from "@/assets/img/project/home-3/img-2.jpg";
import project_img_3_3 from "@/assets/img/project/home-3/img-3.jpg";
import project_img_3_4 from "@/assets/img/project/home-3/img-4.jpg";
import project_img_3_5 from "@/assets/img/project/home-3/img-5.jpg";
import project_img_3_6 from "@/assets/img/project/home-3/img-6.jpg";
import project_img_3_7 from "@/assets/img/project/home-3/img-7.jpg";
import project_img_3_8 from "@/assets/img/project/home-3/img-8.jpg";
import project_img_3_9 from "@/assets/img/project/home-3/img-9.jpg";
import project_img_3_10 from "@/assets/img/project/home-3/img-10.jpg";
import project_img_3_11 from "@/assets/img/project/home-3/img-11.jpg";
import project_img_3_12 from "@/assets/img/project/home-3/img-12.jpg";
import project_img_3_13 from "@/assets/img/project/home-3/img-13.jpg";



import project_img_2_1 from "@/assets/img/project/home-2/img-1.jpg";
import project_img_2_2 from "@/assets/img/project/home-2/img-2.jpg";
import project_img_2_3 from "@/assets/img/project/home-2/img-3.jpg";
import project_img_2_4 from "@/assets/img/project/home-2/img-4.jpg";
import project_img_2_5 from "@/assets/img/project/home-2/img-5.jpg";
import project_img_2_6 from "@/assets/img/project/home-2/img-6.jpg";

import project_img_2_7 from "@/assets/img/project/home-2/img-7.jpg";
import project_img_2_8 from "@/assets/img/project/home-2/img-9.jpg";
import project_img_2_9 from "@/assets/img/project/home-2/img-10.jpg";

import project_img_2_10 from "@/assets/img/project/home-2/img-11.jpg";
import project_img_2_11 from "@/assets/img/project/home-2/img-12.jpg";
import project_img_2_12 from "@/assets/img/project/home-2/img-8.jpg";


import project_img_2_13 from "@/assets/img/project/home-2/img-13.jpg";
import project_img_2_14 from "@/assets/img/project/home-2/img-2.jpg";
import project_img_2_15 from "@/assets/img/project/home-2/img-3.jpg";

import project_img_2_16 from "@/assets/img/project/home-2/img-4.jpg";
import project_img_2_17 from "@/assets/img/project/home-2/img-5.jpg";
import project_img_2_18 from "@/assets/img/project/home-2/img-8.jpg";

import project_img_2_19 from "@/assets/img/project/home-2/img-7.jpg";
import project_img_2_20 from "@/assets/img/project/home-2/img-9.jpg";
import project_img_2_21 from "@/assets/img/project/home-2/img-10.jpg";

import project_img_2_22 from "@/assets/img/project/home-2/img-11.jpg";
import project_img_2_23 from "@/assets/img/project/home-2/img-12.jpg";
import project_img_2_24 from "@/assets/img/project/home-2/img-8.jpg";

import project_img_2_25 from "@/assets/img/project/home-2/img-6.jpg";
import project_img_2_26 from "@/assets/img/project/home-2/img-3.jpg";
import project_img_2_27 from "@/assets/img/project/home-2/img-2.jpg";

import project_img_2_28 from "@/assets/img/project/home-2/img-5.jpg";
import project_img_2_29 from "@/assets/img/project/home-2/img-4.jpg";
import project_img_2_30 from "@/assets/img/project/home-2/img-1.jpg";

interface DataType {
  tab_id: string;
  home: number | string;
  tab_name: string;
  tab_items: {
    img: StaticImageData | string;
    title?: string;
    category?: string;
    name: string;
  }[];
}[]


const project_data: DataType[] = [
  {
    tab_id: "home",
    home: 1,
    tab_name: "Financial Planning",
    tab_items: [
      {
        img: "/projects/financial_planning_1.jpg",
        title: "Our Projects",
        name: "Financial Planning",
      },
      {
        img: "/projects/financial_planning_2.jpg",
        title: "Our Projects",
        name: "Financial Planning",
      },
    ]
  },
  {
    tab_id: "profile",
    home: 1,
    tab_name: "Investment Planning",
    tab_items: [
      {
        img: "/projects/investment_planning_1.jpg",
        title: "Our Projects",
        name: "Investment Planning",
      },
      {
        img: "/projects/investment_planning_2.jpg",
        title: "Our Projects",
        name: "Investment Planning",
      },
    ]
  },
  {
    tab_id: "contact",
    home: 1,
    tab_name: "Wealth Management",
    tab_items: [
      {
        img: "/projects/wealth_manangement_1.jpg",
        title: "Our Projects",
        name: "Wealth Management",
      },
      {
        img: "/projects/wealth_manangement_2.jpeg",
        title: "Our Projects",
        name: "Wealth Management",
      },
    ]
  },
  {
    tab_id: "interiour",
    home: 1,
    tab_name: "Women Entrepreneurs",
    tab_items: [
      {
        img: "/projects/women_entrepreneur_1.jpg",
        title: "Our Projects",
        name: "Women Entrepreneurs",
      },
      {
        img: "/projects/women_entrepreneur_2.jpeg",
        title: "Our Projects",
        name: "Women Entrepreneurs",
      },
    ]
  },
  // home 02
  {
    tab_id: "home",
    home: 2,
    tab_name: "Financial Planning",
    tab_items: [
      {
        img: project_img_2_1,
        category: "Financial Planning",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_2,
        category: "Financial Planning",
        name: "Retirement Planning",
      },
      {
        img: project_img_2_3,
        category: "Financial Planning",
        name: "Smart Savings",
      },
      {
        img: project_img_2_4,
        category: "Financial Planning",
        name: "Tax Planning",
      },
      {
        img: project_img_2_5,
        category: "Financial Planning",
        name: "Investment Advisory",
      },
      {
        img: project_img_2_6,
        category: "Financial Planning",
        name: "Wealth Building",
      },
    ]
  },
  {
    tab_id: "profile",
    home: 2,
    tab_name: "Investment Planning",
    tab_items: [
      {
        img: project_img_2_7,
        category: "Investment Planning",
        name: "Mutual Funds",
      },
      {
        img: project_img_2_8,
        category: "Investment Planning",
        name: "SIP Planning",
      },
      {
        img: project_img_2_9,
        category: "Investment Planning",
        name: "Equity Investment",
      },
      {
        img: project_img_2_10,
        category: "Investment Planning",
        name: "Portfolio Management",
      },
      {
        img: project_img_2_11,
        category: "Investment Planning",
        name: "Asset Allocation",
      },
      {
        img: project_img_2_12,
        category: "Investment Planning",
        name: "Risk Assessment",
      },
    ]
  },
  {
    tab_id: "contact",
    home: 2,
    tab_name: "Wealth Management",
    tab_items: [
      {
        img: project_img_2_13,
        category: "Wealth Management",
        name: "Asset Management",
      },
      {
        img: project_img_2_14,
        category: "Wealth Management",
        name: "Risk Management",
      },
      {
        img: project_img_2_15,
        category: "Wealth Management",
        name: "Estate Planning",
      },
      {
        img: project_img_2_16,
        category: "Wealth Management",
        name: "Wealth Preservation",
      },
      {
        img: project_img_2_17,
        category: "Wealth Management",
        name: "Legacy Planning",
      },
      {
        img: project_img_2_18,
        category: "Wealth Management",
        name: "Trust Services",
      },
    ]
  },
  {
    tab_id: "interiour",
    home: 2,
    tab_name: "Women Entrepreneurs",
    tab_items: [
      {
        img: project_img_2_19,
        category: "Women Entrepreneurs",
        name: "Business Funding",
      },
      {
        img: project_img_2_20,
        category: "Women Entrepreneurs",
        name: "Startup Support",
      },
      {
        img: project_img_2_21,
        category: "Women Entrepreneurs",
        name: "Financial Guidance",
      },
      {
        img: project_img_2_22,
        category: "Women Entrepreneurs",
        name: "Growth Planning",
      },
      {
        img: project_img_2_23,
        category: "Women Entrepreneurs",
        name: "Business Advisory",
      },
      {
        img: project_img_2_24,
        category: "Women Entrepreneurs",
        name: "Mentorship Programs",
      },
    ]
  },
  {
    tab_id: "about",
    home: 2,
    tab_name: "Financial Planning",
    tab_items: [
      {
        img: project_img_2_25,
        category: "Financial Planning",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_26,
        category: "Financial Planning",
        name: "Retirement Planning",
      },
      {
        img: project_img_2_27,
        category: "Financial Planning",
        name: "Smart Savings",
      },
      {
        img: project_img_2_28,
        category: "Financial Planning",
        name: "Tax Planning",
      },
      {
        img: project_img_2_29,
        category: "Financial Planning",
        name: "Goal Setting",
      },
      {
        img: project_img_2_30,
        category: "Financial Planning",
        name: "Financial Review",
      },
    ]
  },

  // home 03
  {
    tab_id: "home",
    home: 3,
    tab_name: "Financial Planning",
    tab_items: [
      {
        img: project_img_3_1,
        category: "Financial Planning",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_2,
        category: "Financial Planning",
        name: "Retirement Planning",
      },
      {
        img: project_img_3_3,
        category: "Financial Planning",
        name: "Smart Savings",
      },
      {
        img: project_img_3_4,
        category: "Financial Planning",
        name: "Tax Planning",
      },
    ]
  },
  {
    tab_id: "profile",
    home: 3,
    tab_name: "Investment Planning",
    tab_items: [
      {
        img: project_img_3_5,
        category: "Investment Planning",
        name: "Mutual Funds",
      },
      {
        img: project_img_3_6,
        category: "Investment Planning",
        name: "SIP Planning",
      },
      {
        img: project_img_3_7,
        category: "Investment Planning",
        name: "Equity Investment",
      },
      {
        img: project_img_3_8,
        category: "Investment Planning",
        name: "Portfolio Management",
      },
    ]
  },
  {
    tab_id: "contact",
    home: 3,
    tab_name: "Wealth Management",
    tab_items: [
      {
        img: project_img_3_9,
        category: "Wealth Management",
        name: "Asset Management",
      },
      {
        img: project_img_3_10,
        category: "Wealth Management",
        name: "Risk Management",
      },
      {
        img: project_img_3_11,
        category: "Wealth Management",
        name: "Estate Planning",
      },
      {
        img: project_img_3_12,
        category: "Wealth Management",
        name: "Wealth Preservation",
      },
    ]
  },
  {
    tab_id: "interiour",
    home: 3,
    tab_name: "Women Entrepreneurs",
    tab_items: [
      {
        img: project_img_3_13,
        category: "Women Entrepreneurs",
        name: "Business Funding",
      },
      {
        img: project_img_3_1,
        category: "Women Entrepreneurs",
        name: "Startup Support",
      },
      {
        img: project_img_3_2,
        category: "Women Entrepreneurs",
        name: "Financial Guidance",
      },
      {
        img: project_img_3_3,
        category: "Women Entrepreneurs",
        name: "Growth Planning",
      },
    ]
  },
  {
    tab_id: "about",
    home: 3,
    tab_name: "Financial Planning",
    tab_items: [
      {
        img: project_img_3_13,
        category: "Financial Planning",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_2,
        category: "Financial Planning",
        name: "Retirement Planning",
      },
      {
        img: project_img_3_3,
        category: "Financial Planning",
        name: "Smart Savings",
      },
      {
        img: project_img_3_4,
        category: "Financial Planning",
        name: "Tax Planning",
      },
    ]
  },

  // project page
  {
    tab_id: "home",
    home: 'project',
    tab_name: "Financial Planning",
    tab_items: [
      {
        img: project_img_3_1,
        category: "Financial Planning",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_2,
        category: "Financial Planning",
        name: "Retirement Planning",
      },
      {
        img: project_img_3_3,
        category: "Financial Planning",
        name: "Smart Savings",
      },
      {
        img: project_img_3_4,
        category: "Financial Planning",
        name: "Tax Planning",
      },
    ]
  },
  {
    tab_id: "profile",
    home: 'project',
    tab_name: "Investment Planning",
    tab_items: [
      {
        img: project_img_3_7,
        category: "Investment Planning",
        name: "Mutual Funds",
      },
      {
        img: project_img_3_8,
        category: "Investment Planning",
        name: "SIP Planning",
      },
      {
        img: project_img_3_9,
        category: "Investment Planning",
        name: "Equity Investment",
      },
      {
        img: project_img_3_10,
        category: "Investment Planning",
        name: "Portfolio Management",
      },
    ]
  },
  {
    tab_id: "contact",
    home: 'project',
    tab_name: "Wealth Management",
    tab_items: [
      {
        img: project_img_3_11,
        category: "Wealth Management",
        name: "Asset Management",
      },
      {
        img: project_img_3_12,
        category: "Wealth Management",
        name: "Risk Management",
      },
      {
        img: project_img_3_13,
        category: "Wealth Management",
        name: "Estate Planning",
      },
      {
        img: project_img_3_5,
        category: "Wealth Management",
        name: "Wealth Preservation",
      },
    ]
  },
  {
    tab_id: "interiour",
    home: 'project',
    tab_name: "Women Entrepreneurs",
    tab_items: [
      {
        img: project_img_3_6,
        category: "Women Entrepreneurs",
        name: "Business Funding",
      },
      {
        img: project_img_2_1,
        category: "Women Entrepreneurs",
        name: "Startup Support",
      },
      {
        img: project_img_2_2,
        category: "Women Entrepreneurs",
        name: "Financial Guidance",
      },
      {
        img: project_img_2_3,
        category: "Women Entrepreneurs",
        name: "Growth Planning",
      },
    ]
  },
  {
    tab_id: "about",
    home: 'project',
    tab_name: "Women Entrepreneurs",
    tab_items: [
      {
        img: project_img_3_13,
        category: "Women Entrepreneurs",
        name: "Business Funding",
      },
      {
        img: project_img_2_4,
        category: "Women Entrepreneurs",
        name: "Startup Support",
      },
      {
        img: project_img_2_5,
        category: "Women Entrepreneurs",
        name: "Financial Guidance",
      },
      {
        img: project_img_2_6,
        category: "Women Entrepreneurs",
        name: "Growth Planning",
      },
    ]
  },





]
export default project_data
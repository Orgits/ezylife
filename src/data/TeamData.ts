

import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  home: number;
  delay: string;
  img: string;
  title: string;
  designation: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  description?: string;
  skills?: {
    title: string;
    value: number;
  }[];
  features?: string[];
  bio?: string;
}[]

const team_data: DataType[] = [
  // home 01
  {
    id: 1,
    home: 1,
    delay: ".3s",
    img: '/ratan.png',
    title: "CA Ratan Singh",
    designation: "Founder & CEO",
    phone: "+91-11-45584780",
    email: "ratan@ezylife.in",
    website: "https://www.ezylife.in",
    address: "Office No. 74D, 7th Floor, Himalaya House, KG Marg, New Delhi – 110001",
    description: "CA Ratan Singh is the Founder and Chief Executive Officer of Ezylife Financial Services Pvt. Ltd., a SEBI-registered Sub-Broker with IIFL Capital and AMFI-registered Mutual Fund Distributor. A seasoned financial professional with over a decade of expertise in wealth management, taxation, investments, and financial advisory.",
    skills: [
      { title: "Financial Planning & Wealth Management", value: 95 },
      { title: "Tax Advisory & Compliance", value: 92 },
      { title: "Investment Strategy & Portfolio Management", value: 90 }
    ],
    features: [
      "Financial Planning & Wealth Management",
      "Tax Advisory & Compliance (Domestic & International)",
      "Equity, Derivatives & Mutual Fund Investments",
      "Corporate Finance & Business Structuring",
      "Portfolio Management & Investment Strategy",
      "Virtual CFO Services & Startup Mentorship"
    ],
    bio: "Under his leadership, Ezylife has grown into a trusted organisation that helps individuals and businesses achieve financial success through transparency, integrity, and innovation. Ratan believes in simplifying complex financial decisions and making wealth creation accessible to everyone — staying true to the company's motto, 'Makes Your Life Easy.' His professional background combines deep financial knowledge with a visionary approach to technology-driven solutions in investment and advisory services."
  },
  {
    id: 2,
    home: 1,
    delay: ".5s",
    img: '/sachin.png',
    title: "CA Sachin Grover",
    designation: "Co-Founder",
    phone: "+91-11-45584781",
    email: "sachin@ezylife.in",
    website: "https://www.ezylife.in",
    address: "Office No. 74D, 7th Floor, Himalaya House, KG Marg, New Delhi – 110001",
    description: "Co-founding Ezylife with expertise in investment planning and portfolio management. Focuses on helping clients build diversified investment portfolios and achieve long-term financial success.",
    skills: [
      { title: "Investment Planning", value: 92 },
      { title: "Portfolio Management", value: 89 },
      { title: "Risk Assessment", value: 85 }
    ],
    features: [
      "Chartered Accountant with investment expertise",
      "Specialist in mutual funds and SIP planning",
      "AMFI registered mutual fund distributor",
      "Expert in equity and debt investments"
    ],
     bio: "CA Sachin Grover co-founded Ezylife with a mission to make investment planning accessible to everyone. His expertise in portfolio management and risk assessment ensures clients receive well-balanced investment strategies tailored to their risk appetite and financial goals."
  },
  // {
  //   id: 3,
  //   home: 1,
  //   delay: ".7s",
  //   img: team_avatar_img_3,
  //   title: "Marvin McKinney",
  //   designation: "Frontend Developer"
  // },
  // {
  //   id: 4,
  //   home: 1,
  //   delay: ".9s",
  //   img: team_avatar_img_4,
  //   title: "Leslie Alexander",
  //   designation: "Backend Developer"
  // },
  // // increase for team page
  // {
  //   id: 3,
  //   home: 1,
  //   delay: ".7s",
  //   img: team_avatar_img_3,
  //   title: "Marvin McKinney",
  //   designation: "Frontend Developer"
  // },
  // {
  //   id: 4,
  //   home: 1,
  //   delay: ".9s",
  //   img: team_avatar_img_4,
  //   title: "Leslie Alexander",
  //   designation: "Backend Developer"
  // }, 
  // {
  //   id: 2,
  //   home: 1,
  //   delay: ".5s",
  //   img: team_avatar_img_2,
  //   title: "Kathryn Murphy",
  //   designation: "Developer"
  // },
  // {
  //   id: 1,
  //   home: 1,
  //   delay: ".3s",
  //   img: team_avatar_img_1,
  //   title: "Albert Flores",
  //   designation: "Designer"
  // },


  // // home 02
  // {
  //   id: 1,
  //   home: 2,
  //   delay: ".3s",
  //   img: team_avatar_img_2_1,
  //   title: "Albert Flores",
  //   designation: "Designer"
  // },
  // {
  //   id: 2,
  //   home: 2,
  //   delay: ".5s",
  //   img: team_avatar_img_2_2,
  //   title: "Esther Howard",
  //   designation: "Developer"
  // },
  // {
  //   id: 3,
  //   home: 2,
  //   delay: ".7s",
  //   img: team_avatar_img_2_3,
  //   title: "Simmons Brook",
  //   designation: "Frontend Developer"
  // },
  // // home 03
  // {
  //   id: 1,
  //   home: 3,
  //   delay: ".3s",
  //   img: team_avatar_img_3_1,
  //   title: "Darlene Robertson",
  //   designation: "UI UX Designer"
  // },
  // {
  //   id: 2,
  //   home: 3,
  //   delay: ".5s",
  //   img: team_avatar_img_3_2,
  //   title: "Cody Fisher",
  //   designation: "PHP Developer"
  // },
  // {
  //   id: 3,
  //   home: 3,
  //   delay: ".7s",
  //   img: team_avatar_img_3_3,
  //   title: "Devon Lane",
  //   designation: "Ux Architect"
  // }

]
export default team_data
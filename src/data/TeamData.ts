

import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  home: number;
  delay: string;
  img: string;
  title: string;
  designation: string;
}[]

const team_data: DataType[] = [
  // home 01
  {
    id: 1,
    home: 1,
    delay: ".3s",
    img: '/ratan.png',
    title: "CA Ratan Singh",
    designation: "Founder & CEO"
  },
  {
    id: 2,
    home: 1,
    delay: ".5s",
    img: '/sachin.png',
    title: "CA Sachin Grover",
    designation: "Co-Founder"
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
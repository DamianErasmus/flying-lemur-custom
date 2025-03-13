import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// We'll need to import the images from the assets folder
// These paths will need to be updated to match your project structure
import muiThumbnail from "../../assets/images/portfolio/mtl/mtl.png";
import muiScreenshot1 from "../../assets/images/portfolio/mtl/ss1.png";
import muiScreenshot2 from "../../assets/images/portfolio/mtl/ss2.png";
import muiScreenshot3 from "../../assets/images/portfolio/mtl/ss3.png";

import nestThumbnail from "../../assets/images/portfolio/nest/nest.png";

import eduAppsThumbnail from "../../assets/images/portfolio/education/edu1.png";
import eduAppsThumbnail2 from "../../assets/images/portfolio/education/edu2.png";
import eduScreenshot1 from "../../assets/images/portfolio/education/ss1.png";
import eduScreenshot2 from "../../assets/images/portfolio/education/ss2.png";
import eduScreenshot3 from "../../assets/images/portfolio/education/ss3.png";
import eduScreenshot4 from "../../assets/images/portfolio/education/ss4.png";
import eduScreenshot5 from "../../assets/images/portfolio/education/ss5.png";
import eduScreenshot6 from "../../assets/images/portfolio/education/ss6.png";

import landingPagesThumbnail from "../../assets/images/portfolio/fe-ment/fe1.png";
import landingPagesThumbnail2 from "../../assets/images/portfolio/fe-ment/fe2.png";
import landingPagesThumbnail3 from "../../assets/images/portfolio/fe-ment/fe3.png";
import landingPagesScreenshot1 from "../../assets/images/portfolio/fe-ment/ss1.png";
import landingPagesScreenshot2 from "../../assets/images/portfolio/fe-ment/ss2.png";
import landingPagesScreenshot3 from "../../assets/images/portfolio/fe-ment/ss3.png";

export interface PortfolioItem {
  id: number;
  slug: string;
  image: string;
  thumbnails?: string[]; // Array of thumbnail images for carousel
  alt: string;
  category: string;
  title: string;
  subtitle: string;
  intro: string;
  scope: string | string[]; // Can be a string or array of strings
  details: string | string[]; // Can be a string or array of paragraphs
  link?: string; // Optional link to live project
  screenshots: string[]; // Array of screenshot images
}

interface PortfolioState {
  portfolioList: PortfolioItem[];
}

const initialState: PortfolioState = {
  portfolioList: [
    {
      id: 1,
      slug: "mui-the-label",
      image: muiThumbnail,
      thumbnails: [muiThumbnail], // Single thumbnail
      alt: "MUI The Label site preview",
      category: "Shopify Development",
      title: "MUI The Label",
      subtitle: "A Shopify store for a local clothing brand",
      intro:
        "Together with the team at MUI The Label, Nina and Damian helped Mui achieve one of her goals: have an online store.",
      scope:
        "Shopify Development, SEO, Content Creation & Social Media Management, Online Business Consultation",
      details: [
        `One day, Nina mentioned, "Damian, my favorite clothing store in Hoi An needs an online store!"  "Sure, " Damian replied. "Let's do it!" And do it we did! We decided to use Shopify to build the store, as there's no point in reinventing the e-commerce wheel. After a few weeks of wireframes, planning, building, and editing Liquid code and CSS, we completed the store.`,
        `Damian took charge of SEO, ensuring the store wasn't just another pretty face on the internet. He set up Google Analytics and Google Search Console, paving the way for data-driven decisions. Nina, on the other hand, revived the social media presence after a two-year hiatus, managed client communications, and created content with. Her skills in video editing with DaVinci Resolve and her involvement in photoshoots—both in front of and behind the camera—significantly impacted Mui The Label's social media presence.`,
        `Together, they liaised with key platforms like DHL and OnePay, gathering all necessary information, and supporting their client by being the in-between for all necessary documentation and key information. This collaboration provided invaluable insights into business expansion tactics. On the Shopify side, Damian was fully responsible for all the development, coding, and bringing design elements to life. Nina handled product updates, meticulously adding information, imagery, and ensuring SEO was on point.`,
        `In the end, we proudly present the Mui The Label Shopify store.`,
      ],
      link: "https://muithelabel.com",
      screenshots: [muiScreenshot1, muiScreenshot2, muiScreenshot3],
    },
    {
      id: 2,
      slug: "nest",
      image: nestThumbnail,
      thumbnails: [nestThumbnail], // Single thumbnail
      alt: "Nest Decor site preview",
      category: "Wordpress Maintenance",
      title: "Nest Decor",
      subtitle: "Wordpress maintenance for a local business",
      intro:
        "NEST. needed some work done on their Wordpress site, and we were happy to help.",
      scope:
        "Wordpress Development, Content Creation and Social Media Management, Google Business, Analytics and Search Console Setup, SEO Optimization, Plugin Management, Custom code for styling and functionality",
      details: [
        `Nina played an essential role in the creative aspects of NEST Home Decor. Using Canva, she designed newsletter templates and managed the monthly newsletter's copy and layout while gaining experience with MailChimp. She handled contact segmentation and email marketing administration. Additionally, she led blog publications with a focus on SEO, ensuring the content was engaging and search engine optimized.`,
        `Social media management was another area where Nina excelled, overseeing daily postings and enhancing NEST's online presence. She addressed issues with the Google profile, improved visibility, and initiated the setup of Google Analytics, seamlessly integrating it with the Wix platform.`,
        `Damian stepped in during a critical time and guided the company through essential web development issues. He re-designed pages, updated the website's look and functionality, and provided ongoing advice on necessary improvements, detailing why they were crucial and how they could be implemented.`,
        `Both Nina and Damian dedicated significant efforts to improving website SEO, tackling the intricate, behind-the-scenes tasks that enhanced NEST Home Decor's visibility on Google. Their combined expertise ensured a stronger online presence and a well-functioning, aesthetically pleasing website.`,
      ],
      link: "https://nestdecor.vn",
      screenshots: [], // No screenshots
    },
    {
      id: 3,
      slug: "educational-apps",
      image: eduAppsThumbnail,
      thumbnails: [eduAppsThumbnail, eduAppsThumbnail2], // Multiple thumbnails for carousel
      alt: "Educational Apps preview",
      category: "Web Development",
      title: "Educational Apps",
      subtitle: "Web apps to assist teachers",
      intro:
        "The creation of educational apps to assist teachers in their daily work",
      scope:
        "ReactJS Web App Development, Netlify Deployment, UI/UX Design, Material UI",
      details: [
        `Being a teacher myself, I understand the challenges and the needs of teachers. I've created a few apps to assist teachers in their daily work.`,
        `Regarding the first app, <a href="https://scrambilino.netlify.app/" target="_blank" rel="noopener noreferrer">Scrambilino</a>, a friend mentioned that a website named Scramblinator was down, so I decided to create a simpler version of it. I built it using ReactJS and Material UI, and deployed it on Netlify.`,
        `The second app was inspired by the fact that teachers often have to think up ways to engage students, so I created <a href="https://inspectdesks.netlify.app/" target="_blank" rel="noopener noreferrer">Inspect the Desks</a>, a game where students can inspect desks and find hidden objects. I built it using ReactJS and custom CSS, and deployed it on Netlify.`,
      ],
      link: "https://scrambilino.netlify.app/",
      screenshots: [
        eduScreenshot1,
        eduScreenshot2,
        eduScreenshot3,
        eduScreenshot4,
        eduScreenshot5,
        eduScreenshot6,
      ],
    },
    {
      id: 4,
      slug: "landing-pages",
      image: landingPagesThumbnail2,
      thumbnails: [
        landingPagesThumbnail,
        landingPagesThumbnail2,
        landingPagesThumbnail3,
      ], // Multiple thumbnails for carousel
      alt: "Landing Pages preview image",
      category: "Web Development",
      title: "Landing Pages",
      subtitle: "Landing page projects",
      intro: "The creation of landing pages for a challenge",
      scope: "HTML, CSS, JavaScript and Netlify Deployment",
      details: [
        `When I started learning web development, I found a website called "Frontend Mentor". It's a website that provides challenges to help you improve your skills.`,
        `I decided to take on the challenge of creating a landing page for each of the challenges. I built it using vanilla HTML, CSS, and JavaScript, no frameworks or libraries; and deployed it on Netlify.`,
        `One of the pages (<a href="https://deshorterlinks.netlify.app/" target="_blank" rel="noopener noreferrer">Shortly</a>) is still responsive, but the others (<a href="https://deeasybanklp.netlify.app/" target="_blank" rel="noopener noreferrer">Easybank</a> and <a href="https://demanagelp.netlify.app/" target="_blank" rel="noopener noreferrer">Manage</a>) are not due to me not having updated the code.`,
      ],
      link: "https://deshorterlinks.netlify.app/",
      screenshots: [
        landingPagesScreenshot1,
        landingPagesScreenshot2,
        landingPagesScreenshot3,
      ],
    },
  ],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolioList: (state, action: PayloadAction<PortfolioItem[]>) => {
      state.portfolioList = action.payload;
    },
    addPortfolioItem: (state, action: PayloadAction<PortfolioItem>) => {
      state.portfolioList.push(action.payload);
    },
    updatePortfolioItem: (state, action: PayloadAction<PortfolioItem>) => {
      const index = state.portfolioList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.portfolioList[index] = action.payload;
      }
    },
    removePortfolioItem: (state, action: PayloadAction<number>) => {
      state.portfolioList = state.portfolioList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setPortfolioList,
  addPortfolioItem,
  updatePortfolioItem,
  removePortfolioItem,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;

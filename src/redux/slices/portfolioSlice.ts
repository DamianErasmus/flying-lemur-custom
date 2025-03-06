import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PortfolioItem {
  id: number;
  slug: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  subtitle: string;
  intro: string;
  scope: string[];
  details: string;
  link: string;
  screenshots: string[];
}

interface PortfolioState {
  portfolioList: PortfolioItem[];
}

const initialState: PortfolioState = {
  portfolioList: [
    {
      id: 1,
      slug: "eco-friendly-packaging",
      image: "https://placehold.co/800x600/f5f5f5/3A6788?text=Project+1",
      alt: "Eco-Friendly Packaging Project",
      category: "Branding & Design",
      title: "Eco-Friendly Packaging",
      subtitle: "Sustainable packaging design for a cosmetics brand",
      intro:
        "We helped a leading cosmetics brand transition to eco-friendly packaging without compromising on aesthetics or brand identity.",
      scope: [
        "Brand Strategy",
        "Packaging Design",
        "Material Selection",
        "Production Oversight",
      ],
      details:
        "This project involved redesigning the entire product line to use sustainable materials while maintaining the premium feel that customers expect. We conducted extensive research on eco-friendly materials and worked closely with manufacturers to ensure feasibility.",
      link: "https://example.com/eco-packaging",
      screenshots: [
        "https://placehold.co/1200x800/f5f5f5/3A6788?text=Screenshot+1",
        "https://placehold.co/1200x800/f5f5f5/3A6788?text=Screenshot+2",
      ],
    },
    {
      id: 2,
      slug: "tech-startup-website",
      image: "https://placehold.co/800x600/f5f5f5/DC7A5F?text=Project+2",
      alt: "Tech Startup Website",
      category: "Web Development",
      title: "Tech Startup Website",
      subtitle: "Modern web presence for an AI startup",
      intro:
        "We designed and developed a cutting-edge website for an AI startup that needed to communicate complex technology in an accessible way.",
      scope: [
        "UX/UI Design",
        "Frontend Development",
        "CMS Integration",
        "SEO Optimization",
      ],
      details:
        "The website features interactive demonstrations of the clients AI technology, a comprehensive resource library, and an intuitive interface for potential investors and customers to learn about their offerings.",
      link: "https://example.com/tech-startup",
      screenshots: [
        "https://placehold.co/1200x800/f5f5f5/DC7A5F?text=Screenshot+1",
        "https://placehold.co/1200x800/f5f5f5/DC7A5F?text=Screenshot+2",
      ],
    },
    {
      id: 3,
      slug: "mobile-banking-app",
      image: "https://placehold.co/800x600/f5f5f5/7EB77F?text=Project+3",
      alt: "Mobile Banking App",
      category: "UI/UX Design",
      title: "Mobile Banking App",
      subtitle: "User-centered design for financial services",
      intro:
        "We redesigned a mobile banking application to improve user experience and increase customer engagement.",
      scope: [
        "User Research",
        "Information Architecture",
        "UI Design",
        "Usability Testing",
      ],
      details:
        "Our team conducted extensive user research to identify pain points in the existing app. We then created a new information architecture and design system that simplified complex financial tasks and made the app more accessible to users of all ages.",
      link: "https://example.com/banking-app",
      screenshots: [
        "https://placehold.co/1200x800/f5f5f5/7EB77F?text=Screenshot+1",
        "https://placehold.co/1200x800/f5f5f5/7EB77F?text=Screenshot+2",
      ],
    },
    {
      id: 4,
      slug: "e-commerce-platform",
      image: "https://placehold.co/800x600/f5f5f5/FFC86F?text=Project+4",
      alt: "E-commerce Platform",
      category: "Web Development",
      title: "E-commerce Platform",
      subtitle: "Custom shopping experience for a fashion retailer",
      intro:
        "We built a custom e-commerce platform for a fashion retailer that needed unique features not available in off-the-shelf solutions.",
      scope: [
        "Custom Development",
        "Payment Integration",
        "Inventory Management",
        "Mobile Optimization",
      ],
      details:
        "The platform includes a virtual try-on feature, personalized recommendations based on user preferences, and seamless integration with the clients inventory management system.",
      link: "https://example.com/ecommerce",
      screenshots: [
        "https://placehold.co/1200x800/f5f5f5/FFC86F?text=Screenshot+1",
        "https://placehold.co/1200x800/f5f5f5/FFC86F?text=Screenshot+2",
      ],
    },
    {
      id: 5,
      slug: "corporate-identity",
      image: "https://placehold.co/800x600/f5f5f5/3A6788?text=Project+5",
      alt: "Corporate Identity",
      category: "Branding",
      title: "Corporate Identity",
      subtitle: "Complete rebrand for a management consulting firm",
      intro:
        "We developed a new corporate identity for a management consulting firm looking to reposition itself in the market.",
      scope: [
        "Brand Strategy",
        "Logo Design",
        "Visual Identity",
        "Brand Guidelines",
      ],
      details:
        "The rebrand included a new logo, color palette, typography, and comprehensive brand guidelines. We also created templates for various marketing materials and digital assets to ensure consistency across all touchpoints.",
      link: "https://example.com/corporate-identity",
      screenshots: [
        "https://placehold.co/1200x800/f5f5f5/3A6788?text=Screenshot+1",
        "https://placehold.co/1200x800/f5f5f5/3A6788?text=Screenshot+2",
      ],
    },
    {
      id: 6,
      slug: "social-media-campaign",
      image: "https://placehold.co/800x600/f5f5f5/DC7A5F?text=Project+6",
      alt: "Social Media Campaign",
      category: "Digital Marketing",
      title: "Social Media Campaign",
      subtitle: "Engaging content strategy for a food delivery service",
      intro:
        "We created and executed a social media campaign that increased engagement and conversions for a food delivery service.",
      scope: [
        "Content Strategy",
        "Creative Direction",
        "Campaign Management",
        "Performance Analysis",
      ],
      details:
        "The campaign featured a series of short videos showcasing the convenience and variety of the service, targeted ads based on user preferences, and influencer partnerships to expand reach.",
      link: "https://example.com/social-campaign",
      screenshots: [
        "https://placehold.co/1200x800/f5f5f5/DC7A5F?text=Screenshot+1",
        "https://placehold.co/1200x800/f5f5f5/DC7A5F?text=Screenshot+2",
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
  },
});

export const { setPortfolioList } = portfolioSlice.actions;
export default portfolioSlice.reducer;

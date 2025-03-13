import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Image imports
import webDev from "../../assets/images/services/webdev.png";
import ecom from "../../assets/images/services/ecom.png";
import marketing from "../../assets/images/services/seo.png";
import content from "../../assets/images/services/content.png";
import brand from "../../assets/images/services/brand.png";
import consulting from "../../assets/images/services/webdev.png";

export interface PricingTier {
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  image: string;
  title: string;
  miniDescription: string;
  description: string;
  intro: string;
  fullDescription: string;
  color: string;
  pricingTiers: PricingTier[];
}

interface ServicesState {
  services: ServiceItem[];
  whatWeDo: string;
}

const initialState: ServicesState = {
  whatWeDo:
    "At Flying Lemur, we believe in making the digital world accessible to everyone. We work closely with you to understand your unique needs and create tailored solutions that help your business thrive online. Our approach is friendly, straightforward, and focused on delivering real results.",
  services: [
    {
      id: "1",
      slug: "web-development-and-design",
      image: webDev,
      title: "Web Development and Design",
      miniDescription:
        "We create stunning websites by blending technical expertise with creative design.",
      description:
        "We create user-friendly, visually stunning websites using industry-standard tools like HTML, CSS, Javascript, ReactJS, NextJS, Wordpress and WixStudio; blending technical expertise with creative design.",
      intro:
        "Looking for top-notch web development and design services? The Flying Lemur Agency has got you covered.",
      fullDescription:
        "With over five years of hands-on experience, Damian excels in the technical aspects, utilizing industry-standard tools like HTML, CSS, and JavaScript, as well as libraries and frameworks like React and NextJS, to create robust, user-friendly websites. Meanwhile, Nina enhances the visual appeal, continuously honing her design skills through Figma to ensure your site is both functional and visually stunning. Whether you're starting from scratch or need a refresh, our team blends technical prowess with creative design to make your online presence truly shine.",
      color: "#3A6788",
      pricingTiers: [
        {
          title: "Basic Website",
          price: "$999",
          features: [
            "5-page responsive website",
            "Mobile-friendly design",
            "Basic SEO setup",
            "Contact form",
            "2 revision rounds",
            "14-day delivery",
          ],
          isPopular: false,
        },
        {
          title: "Business Website",
          price: "$1,999",
          features: [
            "10-page responsive website",
            "Custom design elements",
            "Advanced SEO optimization",
            "Contact forms & integrations",
            "Content management system",
            "Social media integration",
            "3 revision rounds",
            "21-day delivery",
          ],
          isPopular: true,
        },
        {
          title: "E-Commerce Website",
          price: "$3,499",
          features: [
            "Full e-commerce functionality",
            "Product catalog (up to 50 items)",
            "Payment gateway integration",
            "Inventory management",
            "Customer account creation",
            "Advanced SEO & analytics",
            "Unlimited revisions",
            "30-day delivery",
          ],
          isPopular: false,
        },
      ],
    },
    {
      id: "2",
      slug: "e-commerce-solutions",
      image: ecom,
      title: "E-Commerce Solutions",
      miniDescription:
        "We simplify the process of setting up e-commerce platforms.",
      description:
        "We simplify the process of setting up e-commerce platforms, from payment gateway integration to efficient shipping, with a focus on the Vietnamese market and global experience.",
      intro:
        "Navigating the e-commerce landscape can be tricky, but The Flying Lemur Agency makes it seamless.",
      fullDescription:
        "Specializing in the Vietnamese market, we handle everything from connecting with payment gateway providers to setting up efficient shipping processes. Our deep understanding of the local market dynamics, combined with our global experience, ensures a smooth setup. We guide you through the entire process, providing clear timelines and cost expectations. With patience, transparency, and a proven track record, we help you establish a thriving e-commerce platform, no matter where you are in the world.",
      color: "#FFC86F",
      pricingTiers: [
        {
          title: "Starter Store",
          price: "$1,499",
          features: [
            "Basic online store setup",
            "Up to 25 products",
            "Single payment gateway",
            "Basic shipping setup",
            "Product management training",
            "14-day delivery",
          ],
          isPopular: false,
        },
        {
          title: "Growth Store",
          price: "$2,999",
          features: [
            "Advanced store setup",
            "Up to 100 products",
            "Multiple payment gateways",
            "Shipping rate optimization",
            "Inventory management",
            "Basic marketing integrations",
            "Order fulfillment setup",
            "21-day delivery",
          ],
          isPopular: true,
        },
        {
          title: "Enterprise Store",
          price: "$4,999",
          features: [
            "Premium store development",
            "Unlimited products",
            "Multi-currency support",
            "Advanced shipping logic",
            "Inventory & supplier integration",
            "Marketing automation",
            "Custom reporting",
            "30-day delivery",
          ],
          isPopular: false,
        },
      ],
    },
    {
      id: "3",
      slug: "marketing-and-reporting",
      image: marketing,
      title: "Marketing and Reporting",
      miniDescription:
        "We offer actionable insights to improve your online visibility.",
      description:
        "We offer clear and actionable SEO insights through analytics, reporting, and targeted marketing strategies across multiple channels to improve your online visibility.",
      intro: "SEO doesn't have to be a mystery.",
      fullDescription:
        "At The Flying Lemur Agency, we simplify the complex world of search engine optimization. We handle the heavy lifting—analytics, reporting, and continuous testing—while delivering clear, actionable insights to you. Our marketing strategies span various channels, ensuring a comprehensive approach to boosting your online visibility. Whether it's through targeted campaigns, social media, or content marketing, we tailor our efforts to meet your specific goals, making the entire process as straightforward and effective as possible.",
      color: "#7EB77F",
      pricingTiers: [
        {
          title: "SEO Essentials",
          price: "$599/mo",
          features: [
            "Keyword research",
            "On-page SEO optimization",
            "Google My Business setup",
            "Monthly performance report",
            "Basic competitor analysis",
            "3-month minimum commitment",
          ],
          isPopular: false,
        },
        {
          title: "Growth Marketing",
          price: "$1,299/mo",
          features: [
            "Comprehensive SEO strategy",
            "Content marketing plan",
            "Social media management",
            "Google Ads management",
            "Bi-weekly performance reports",
            "Conversion optimization",
            "6-month minimum commitment",
          ],
          isPopular: true,
        },
        {
          title: "Full-Scale Marketing",
          price: "$2,499/mo",
          features: [
            "Enterprise SEO strategy",
            "Content creation & distribution",
            "Social media advertising",
            "Email marketing campaigns",
            "Advanced analytics & reporting",
            "Conversion rate optimization",
            "Marketing automation",
            "12-month minimum commitment",
          ],
          isPopular: false,
        },
      ],
    },
    {
      id: "4",
      slug: "content-and-copy-creation",
      image: content,
      title: "Content and Copy Creation",
      miniDescription:
        "Our team crafts engaging content to improve your Google rankings.",
      description:
        "Our team crafts engaging content, from social media posts to blog articles, designed to drive meaningful engagement and improve your Google rankings.",
      intro: "Need compelling content that resonates with your audience?",
      fullDescription:
        "From managing your social media to crafting blog posts that elevate your Google rankings, our team excels in writing, graphic design, and video editing. We start with a thorough consultation to understand your needs, followed by strategic planning and creative execution. Whether it's engaging copy or eye-catching visuals, we ensure your content not only captures attention but also drives meaningful engagement and growth.",
      color: "#6A4C93",
      pricingTiers: [
        {
          title: "Content Starter",
          price: "$499/mo",
          features: [
            "4 blog posts per month",
            "Basic keyword optimization",
            "8 social media posts",
            "Content calendar",
            "Monthly performance review",
            "3-month minimum commitment",
          ],
          isPopular: false,
        },
        {
          title: "Content Pro",
          price: "$999/mo",
          features: [
            "8 blog posts per month",
            "Advanced SEO optimization",
            "16 social media posts",
            "2 premium graphics per month",
            "Content strategy development",
            "Engagement monitoring",
            "6-month minimum commitment",
          ],
          isPopular: true,
        },
        {
          title: "Content Enterprise",
          price: "$1,999/mo",
          features: [
            "12 blog posts per month",
            "Comprehensive SEO strategy",
            "Daily social media management",
            "4 premium graphics per month",
            "1 video production per month",
            "Content distribution strategy",
            "Competitor content analysis",
            "12-month minimum commitment",
          ],
          isPopular: false,
        },
      ],
    },
    {
      id: "5",
      slug: "brand-design-and-development",
      image: brand,
      title: "Brand Design & Development",
      miniDescription:
        "We provide comprehensive brand design services for your business.",
      description:
        "We provide comprehensive brand design services, including logo creation and brand voice development, to build a strong and recognizable identity for your business.",
      intro: "Building a strong brand starts with the basics.",
      fullDescription:
        "At The Flying Lemur Agency, we offer comprehensive brand design and development services to lay a solid foundation for your business. A brand kit—including your logo, color palette, and typography—provides the visual identity that makes your business recognizable. Equally important is defining your brand voice—the tone and personality that sets you apart. Our service ensures you have all the essential elements in place, creating a cohesive and compelling brand that resonates with your target audience.",
      color: "#DC7A5F",
      pricingTiers: [
        {
          title: "Brand Essentials",
          price: "$1,299",
          features: [
            "Logo design (3 concepts)",
            "Basic brand guidelines",
            "Color palette selection",
            "Typography selection",
            "Business card design",
            "2 revision rounds",
            "14-day delivery",
          ],
          isPopular: false,
        },
        {
          title: "Brand Identity",
          price: "$2,499",
          features: [
            "Logo design (5 concepts)",
            "Comprehensive brand guidelines",
            "Color palette & typography",
            "Brand voice development",
            "Social media templates",
            "Business stationery design",
            "3 revision rounds",
            "21-day delivery",
          ],
          isPopular: true,
        },
        {
          title: "Brand Experience",
          price: "$4,999",
          features: [
            "Premium logo design",
            "Complete brand identity system",
            "Extensive brand guidelines",
            "Brand messaging strategy",
            "Marketing collateral design",
            "Website design consultation",
            "Social media brand kit",
            "Unlimited revisions",
            "30-day delivery",
          ],
          isPopular: false,
        },
      ],
    },
    {
      id: "6",
      slug: "consulting-services",
      image: consulting,
      title: "Consulting Services",
      miniDescription:
        "Our personalized consulting services guide you through the digital landscape to help you succeed.",
      description:
        "Our personalized consulting services guide you through the digital landscape, offering expert advice across web development, e-commerce, SEO, content creation, and more to help you succeed.",
      intro: "Need expert guidance to navigate the digital landscape?",
      fullDescription:
        "At The Flying Lemur Agency, our consulting services are designed for those who want to be hands-on but need expert guidance to navigate the digital landscape. We offer personalized consultations across all our services—web development, e-commerce, digital marketing, SEO, content creation, and brand development. Our approach is rooted in thorough research and connecting you with the most effective tools for your business needs. Whether you're launching a new online store or refining your existing digital strategy, we provide the insights and support you need to succeed. With our help, you'll gain the confidence and knowledge to take control of your online presence, ensuring every step you take is informed and impactful.",
      color: "#3A6788",
      pricingTiers: [
        {
          title: "Strategy Session",
          price: "$499",
          features: [
            "2-hour consultation",
            "Digital strategy overview",
            "Competitive analysis",
            "Actionable recommendations",
            "Follow-up email summary",
            "7-day delivery",
          ],
          isPopular: false,
        },
        {
          title: "Business Roadmap",
          price: "$1,499",
          features: [
            "Comprehensive digital audit",
            "3 consultation sessions",
            "Detailed strategy document",
            "Implementation timeline",
            "Tool recommendations",
            "30-day email support",
            "14-day delivery",
          ],
          isPopular: true,
        },
        {
          title: "Ongoing Consultation",
          price: "$999/mo",
          features: [
            "Weekly strategy calls",
            "Implementation guidance",
            "Performance monitoring",
            "Strategy adjustments",
            "Vendor management support",
            "Priority email support",
            "3-month minimum commitment",
          ],
          isPopular: false,
        },
      ],
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<ServiceItem[]>) => {
      state.services = action.payload;
    },
    addService: (state, action: PayloadAction<ServiceItem>) => {
      state.services.push(action.payload);
    },
    updateService: (state, action: PayloadAction<ServiceItem>) => {
      const index = state.services.findIndex(
        (service) => service.id === action.payload.id
      );
      if (index !== -1) {
        state.services[index] = action.payload;
      }
    },
    removeService: (state, action: PayloadAction<string>) => {
      state.services = state.services.filter(
        (service) => service.id !== action.payload
      );
    },
    setWhatWeDo: (state, action: PayloadAction<string>) => {
      state.whatWeDo = action.payload;
    },
  },
});

export const {
  setServices,
  addService,
  updateService,
  removeService,
  setWhatWeDo,
} = servicesSlice.actions;
export default servicesSlice.reducer;

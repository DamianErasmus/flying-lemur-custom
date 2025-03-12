import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ServiceItem {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  intro?: string;
  color?: string;
}

interface ServicesState {
  services: ServiceItem[];
}

const initialState: ServicesState = {
  services: [
    {
      id: "service1",
      slug: "web-design",
      image: "https://placehold.co/200x200/f5f5f5/3A6788?text=Web",
      title: "Web Design & Development",
      description:
        "We create beautiful, functional websites that look great on any device and help your business stand out online.",
      intro:
        "Our web design process is collaborative and transparent. We start by understanding your goals, then create a custom design that reflects your brand and engages your audience.",
      color: "#3A6788",
    },
    {
      id: "service2",
      slug: "branding",
      image: "https://placehold.co/200x200/f5f5f5/DC7A5F?text=Brand",
      title: "Branding & Identity",
      description:
        "We help you build a strong, consistent brand that communicates your values and connects with your audience.",
      intro:
        "Your brand is more than just a logo—it's the personality of your business. We'll help you define and express that personality across all touchpoints.",
      color: "#DC7A5F",
    },
    {
      id: "service3",
      slug: "digital-marketing",
      image: "https://placehold.co/200x200/f5f5f5/7EB77F?text=Marketing",
      title: "Digital Marketing",
      description:
        "We develop targeted digital marketing strategies that increase your visibility, drive traffic, and convert visitors into customers.",
      intro:
        "Our digital marketing approach focuses on creating meaningful connections with your audience through content that educates, entertains, and inspires.",
      color: "#7EB77F",
    },
    {
      id: "service4",
      slug: "ecommerce",
      image: "https://placehold.co/200x200/f5f5f5/FFC86F?text=Shop",
      title: "E-commerce Solutions",
      description:
        "We build online stores that are easy to manage, secure, and designed to maximize sales and customer satisfaction.",
      intro:
        "Selling online should be simple. We create e-commerce experiences that make buying easy for your customers and managing inventory easy for you.",
      color: "#FFC86F",
    },
    {
      id: "service5",
      slug: "content-creation",
      image: "https://placehold.co/200x200/f5f5f5/6A4C93?text=Content",
      title: "Content Creation",
      description:
        "We produce engaging, high-quality content that tells your story, showcases your expertise, and builds trust with your audience.",
      intro:
        "Great content is at the heart of digital success. Our content strategies are designed to attract, engage, and convert your ideal customers.",
      color: "#6A4C93",
    },
    {
      id: "service6",
      slug: "seo-optimization",
      image: "https://placehold.co/200x200/f5f5f5/3A6788?text=SEO",
      title: "SEO Optimization",
      description:
        "We improve your website's visibility in search engines, helping you reach more potential customers when they're looking for what you offer.",
      intro:
        "SEO isn't about tricking search engines—it's about creating the best possible experience for your users. Our approach focuses on sustainable, long-term results.",
      color: "#3A6788",
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
  },
});

export const { setServices, addService, updateService, removeService } =
  servicesSlice.actions;
export default servicesSlice.reducer;

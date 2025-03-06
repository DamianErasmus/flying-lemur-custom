import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ServiceItem {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  intro: string;
  color: string;
}

interface ServicesState {
  services: ServiceItem[];
}

// Define colors directly (we'll use these until we resolve the global color issue)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const initialState: ServicesState = {
  services: [
    {
      id: 1,
      slug: "web-development",
      image: "https://placehold.co/600x400/f5f5f5/3A6788?text=Web+Development",
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies.",
      intro:
        "Our web development team creates responsive, user-friendly websites and applications that deliver exceptional user experiences across all devices.",
      color: colors.lapis,
    },
    {
      id: 2,
      slug: "ui-ux-design",
      image: "https://placehold.co/600x400/f5f5f5/DC7A5F?text=UI/UX+Design",
      title: "UI/UX Design",
      description:
        "User-centered design that enhances engagement and satisfaction.",
      intro:
        "We design intuitive interfaces and seamless user experiences that help your customers achieve their goals efficiently and enjoyably.",
      color: colors.oran,
    },
    {
      id: 3,
      slug: "e-commerce",
      image: "https://placehold.co/600x400/f5f5f5/FFC86F?text=E-commerce",
      title: "E-commerce Solutions",
      description:
        "Online stores and shopping experiences that drive conversions.",
      intro:
        "From custom e-commerce platforms to optimized shopping carts, we build solutions that make selling online simple and profitable.",
      color: colors.yelo,
    },
    {
      id: 4,
      slug: "content-creation",
      image: "https://placehold.co/600x400/f5f5f5/7EB77F?text=Content+Creation",
      title: "Content Creation",
      description:
        "Compelling content that tells your story and engages your audience.",
      intro:
        "Our content team creates strategic, engaging content across various formats to help you connect with your audience and achieve your business goals.",
      color: colors.gren,
    },
    {
      id: 5,
      slug: "seo",
      image: "https://placehold.co/600x400/f5f5f5/3A6788?text=SEO",
      title: "SEO Optimization",
      description:
        "Data-driven strategies to improve your search engine rankings.",
      intro:
        "We help your business get found online through comprehensive SEO strategies that increase visibility, traffic, and conversions.",
      color: colors.lapis,
    },
    {
      id: 6,
      slug: "digital-marketing",
      image:
        "https://placehold.co/600x400/f5f5f5/DC7A5F?text=Digital+Marketing",
      title: "Digital Marketing",
      description:
        "Integrated campaigns that reach and convert your target audience.",
      intro:
        "Our digital marketing services combine creativity and analytics to deliver campaigns that generate measurable results for your business.",
      color: colors.oran,
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
  },
});

export const { setServices } = servicesSlice.actions;
export default servicesSlice.reducer;

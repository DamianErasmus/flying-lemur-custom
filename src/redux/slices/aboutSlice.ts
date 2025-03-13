import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AboutState {
  title: string;
  description: string;
  ourStory: string[];
}

const initialState: AboutState = {
  title: "About Flying Lemur",
  description:
    "The Flying Lemur Agency, founded by Damian and Nina in 2024, aims to simplify the online world for small businesses. Like a trusted friend guiding you through unfamiliar territory, our friendly team provides a warm, structured yet relaxed approach, making your online journey feel seamless and enjoyable. Whether you're looking for hands-on collaboration or a smooth, hands-off experience, we're here to help your business glide effortlessly onto the internet, providing a safe landing every step of the way.",
  ourStory: [
    "The Flying Lemur Agency was born in 2024 from the combined journeys of Damian and Nina. Nina was deep into learning digital marketing and helping women in business make meaningful changes, while Damian was in his fifth year of self-taught coding and web development. Realizing the potential of their combined expertise, they teamed up to offer services with a personal touch, guiding clients through the often-confusing digital landscape.",
    "Think of us as your new business partners, but without the awkward water cooler chats. We dive right into your business and help you navigate the often-confusing digital landscape.",
    "We’re all about transparency and efficiency. Our structured approach ensures that every project is handled with care and precision, maximizing productivity and results. Our ever-growing list of services includes web development & design, e-commerce solutions, digital marketing, SEO (aka your ticket to Google’s front page), analysis and reporting, content & copy creation, brand development, and consultation and training. And trust us, each of these services packs way more punch than it sounds.",
    "Explore our services and let The Flying Lemur Agency help you glide seamlessly onto the internet.",
  ],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAboutInfo: (state, action: PayloadAction<AboutState>) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.ourStory = action.payload.ourStory;
    },
  },
});

export const { setAboutInfo } = aboutSlice.actions;
export default aboutSlice.reducer;

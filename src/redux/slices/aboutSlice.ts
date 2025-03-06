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
    "Flying Lemur was founded in 2015 with a simple mission: to help businesses stand out in a crowded digital landscape. What started as a small team of passionate designers has grown into a full-service creative agency.",
    "Over the years, we have worked with clients across various industries, from startups to established enterprises. Our approach combines creativity with strategic thinking, ensuring that every project not only looks great but also delivers results.",
    "Today, our team of designers, developers, and strategists continues to push boundaries and explore new possibilities. We believe in the power of collaboration, both within our team and with our clients, to create meaningful and impactful work.",
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

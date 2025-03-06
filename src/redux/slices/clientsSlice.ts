import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClientLogo {
  id: string;
  name: string;
  logoSrc: string;
  url?: string;
  industry?: string;
  description?: string;
}

interface ClientsState {
  logos: ClientLogo[];
}

const initialState: ClientsState = {
  logos: [
    {
      id: "client1",
      name: "TechNova",
      logoSrc: "https://placehold.co/200x100/f5f5f5/3A6788?text=TechNova",
      url: "https://example.com/technova",
      industry: "Technology",
      description: "A leading technology company specializing in AI solutions.",
    },
    {
      id: "client2",
      name: "GreenLeaf",
      logoSrc: "https://placehold.co/200x100/f5f5f5/7EB77F?text=GreenLeaf",
      url: "https://example.com/greenleaf",
      industry: "Sustainability",
      description: "Eco-friendly products for a sustainable future.",
    },
    {
      id: "client3",
      name: "SunRise Media",
      logoSrc: "https://placehold.co/200x100/f5f5f5/FFC86F?text=SunRise",
      url: "https://example.com/sunrise",
      industry: "Media",
      description: "Creative media agency focused on digital storytelling.",
    },
    {
      id: "client4",
      name: "CoralFinance",
      logoSrc: "https://placehold.co/200x100/f5f5f5/DC7A5F?text=CoralFinance",
      url: "https://example.com/coral",
      industry: "Finance",
      description: "Modern financial services for small businesses.",
    },
    {
      id: "client5",
      name: "BlueSky Travel",
      logoSrc: "https://placehold.co/200x100/f5f5f5/3A6788?text=BlueSky",
      url: "https://example.com/bluesky",
      industry: "Travel",
      description: "Luxury travel experiences for the modern explorer.",
    },
    {
      id: "client6",
      name: "PurpleWave",
      logoSrc: "https://placehold.co/200x100/f5f5f5/6A4C93?text=PurpleWave",
      url: "https://example.com/purplewave",
      industry: "Technology",
      description: "Innovative software solutions for businesses.",
    },
    {
      id: "client7",
      name: "RedRock Construction",
      logoSrc: "https://placehold.co/200x100/f5f5f5/DC7A5F?text=RedRock",
      url: "https://example.com/redrock",
      industry: "Construction",
      description:
        "Quality construction services with a focus on sustainability.",
    },
    {
      id: "client8",
      name: "YellowDot Design",
      logoSrc: "https://placehold.co/200x100/f5f5f5/FFC86F?text=YellowDot",
      url: "https://example.com/yellowdot",
      industry: "Design",
      description: "Creative design studio specializing in brand identity.",
    },
  ],
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClientLogos: (state, action: PayloadAction<ClientLogo[]>) => {
      state.logos = action.payload;
    },
    addClientLogo: (state, action: PayloadAction<ClientLogo>) => {
      state.logos.push(action.payload);
    },
    removeClientLogo: (state, action: PayloadAction<string>) => {
      state.logos = state.logos.filter((logo) => logo.id !== action.payload);
    },
    updateClientLogo: (state, action: PayloadAction<ClientLogo>) => {
      const index = state.logos.findIndex(
        (logo) => logo.id === action.payload.id
      );
      if (index !== -1) {
        state.logos[index] = action.payload;
      }
    },
  },
});

export const {
  setClientLogos,
  addClientLogo,
  removeClientLogo,
  updateClientLogo,
} = clientsSlice.actions;
export default clientsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./slices/aboutSlice";
import portfolioReducer from "./slices/portfolioSlice";
import servicesReducer from "./slices/servicesSlice";
import clientsReducer from "./slices/clientsSlice";

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    portfolio: portfolioReducer,
    services: servicesReducer,
    clients: clientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

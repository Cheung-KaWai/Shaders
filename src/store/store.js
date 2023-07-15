import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export const useTransitionStore = create((set) => ({
  textureName: "color1.jpg",
  update: (name, value) => set({ [name]: value }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useTransitionStore);
}

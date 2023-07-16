import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export const useTransitionStore = create((set) => ({
  textureName: "1",
  update: (name, value) => set({ [name]: value }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useTransitionStore);
}

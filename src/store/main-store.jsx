import React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const mainStore = (set) => ({
  arr2: [],
  addArr2: (newValue) =>
    set((state) => ({
      arr2: [...state.arr2, { id: Date.now(), title: newValue }],
    })),
  delArr2: (id) =>
    set((state) => ({
      arr2: state.arr2.filter((item, idex) => item.id !== id),
    })),
});
const usePersist = {
  name: "main-store",
  getStorage: () => localStorage,
  partialize: (state) => ({
    arr2: state.arr2,
  }),
};

const useStore = create(persist(mainStore,usePersist));

export default useStore;

import { StateCreator } from "zustand";

export type SectionSlice = {
    section : string,
    changeSection : (NEW : string) => void
}

export const sectionSlice : StateCreator<SectionSlice> = (set , get) => ({
    section : "Home",
    changeSection : (NEW) => {
        set({section : NEW})
    }
})
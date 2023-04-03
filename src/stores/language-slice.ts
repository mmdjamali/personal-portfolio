import { StateCreator } from "zustand";

type Theme = "tr" | "en"

export type LanguageSlice = {
    language : Theme;
    changeLanguage : () => void;
}

export const languageSlice : StateCreator<LanguageSlice> = (set, get) => ({
    language : "en",
    changeLanguage : () => {
        set({language : get().language === "tr" ? "en" : "tr"})
    }
})
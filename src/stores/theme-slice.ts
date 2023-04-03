import { StateCreator } from "zustand";

type Theme = "light" | "dark"

export type ThemeSlice = {
    theme : Theme;
    changeTheme : () => void;
}

export const themeSlice : StateCreator<ThemeSlice> = (set, get) => ({
    theme : "dark",
    changeTheme : () => {
        set({theme : get().theme === "light" ? "dark" : "light"})
    }
})
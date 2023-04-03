import { create } from 'zustand'
import { ThemeSlice } from "./theme-slice";
import { LanguageSlice } from "./language-slice";
import { themeSlice } from "./theme-slice";
import { languageSlice } from "./language-slice";

type StoreState = ThemeSlice & LanguageSlice

export const useAppState = create<StoreState>()((...a) => ({
    ...themeSlice(...a),
    ...languageSlice(...a)
}))
import { create } from 'zustand'
import { ThemeSlice } from "./theme-slice";
import { LanguageSlice } from "./language-slice";
import { themeSlice } from "./theme-slice";
import { languageSlice } from "./language-slice";
import { sectionSlice } from './section-slice';
import { SectionSlice } from './section-slice';

type StoreState = ThemeSlice & LanguageSlice & SectionSlice

export const useAppState = create<StoreState>()((...a) => ({
    ...themeSlice(...a),
    ...languageSlice(...a),
    ...sectionSlice(...a)
}))
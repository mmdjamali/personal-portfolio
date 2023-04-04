import { IconType } from "react-icons/lib";
import { 
    SiPreact,
    SiReact,
    SiVite,
    SiTailwindcss,
    SiSupabase ,
    SiNextdotjs
} from "react-icons/si";

import {
    TbBrandNextjs
} from "react-icons/tb";

export const techLists : {
    [key : string] : {
        color : string,
        Icon : IconType
    }
} = {
    "react" : {
        Icon : SiReact,
        color : "text-cyan-500"
    },
    "preact" : {
        Icon : SiPreact,
        color : "text-purple-500"
    },
    "vite" : {
        Icon : SiVite,
        color : "text-violet-500"
    },
    "tailwind" : {
        Icon : SiTailwindcss,
        color : "text-cyan-500"
    },
    "supabase" : {
        Icon : SiSupabase,
        color : "text-emerald-500"
    },
    "next" : {
        Icon : SiNextdotjs,
        color : "text-neutral-800 dark:text-white"
    },
}
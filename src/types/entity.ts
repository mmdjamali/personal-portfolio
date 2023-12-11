import { ColorKeys } from "@/constants/colors"

export type TechnologyEntity = {
    id?: string,
    name?: string,
    icon?: string,
    url?: string,
    started_using_at?: string,
    used_often?: boolean,
    color?: ColorKeys,
    created_at?: string,
    updated_at?: string
}

export type ProjectEntity = {
    id?: string,
    name?: string,
    description?: string,
    thumbnail?: string,
    github?: string,
    live?: string,
    color?: string,
    created_at?: string,
    updated_at?: string,
    showcase: string,
    technologies: TechnologyEntity[]
}


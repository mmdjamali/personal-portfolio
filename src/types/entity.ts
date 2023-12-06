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
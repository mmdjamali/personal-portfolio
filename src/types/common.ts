import { IconKeyType } from ".";

export type RouteItemType = { path: string; icon: IconKeyType; iconFill: IconKeyType; title: string }

export type RouteType = {
    title: string,
    items: RouteItemType[]
}
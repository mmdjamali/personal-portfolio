import { Icons } from "@/components/icons";

export type IconKeyType = keyof typeof Icons;

export interface NavItem {
  title: string;
  url?: string;
  disabled?: boolean;
  external?: boolean;
  //   icon?: IconKeyType;
}

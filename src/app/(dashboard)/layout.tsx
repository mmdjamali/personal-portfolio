"use client";

import Icon from "@/components/icon";
import DashboardNav from "@/components/layout/dashboard-nav";
import ThemeChanger from "@/components/theme-changer";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RouteType } from "@/types/common";
import { usePathname } from "next/navigation";

const Layout = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();

  const routes = [
    {
      title: "Home",
      items: [
        {
          icon: "DashboardLine",
          iconFill: "DashboardFill",
          path: `/dashboard`,
          title: "Dashboard",
        },
      ],
    },
    {
      title: "DATA MANAGEMENT",
      items: [
        {
          path: "/dashboard/projects",
          icon: "BookLine",
          iconFill: "BookFill",
          title: "Projects",
        },
        {
          path: "/dashboard/add-project",
          icon: "AddBoxLine",
          iconFill: "AddBoxFill",
          title: "Add Project",
        },
      ],
    },
  ] satisfies RouteType[];
  return (
    <div className="block">
      <div className="relative z-[2] grid lg:grid-cols-[280px_,_1fr]">
        <div className="sticky top-0 z-[51] hidden h-screen w-fit flex-col border-r border-foreground/10 bg-background md:w-full lg:flex">
          <div className="sticky top-0 z-[50]">
            <div className="flex h-[54px] w-full items-center gap-2 px-5">
              <Icon name="Crown" className="h-[28px] text-foreground" />

              <span className="text-base-content hidden font-bold md:inline">
                MmD
              </span>
            </div>
          </div>

          <DashboardNav
            routes={routes}
            className={"h-[calc(100svh_-_56px)] w-fit gap-1 px-5 md:w-full"}
          />
        </div>

        <div className="relative z-[1] h-full w-full">
          <div className="sticky top-0 z-[50] bg-background shadow-[0px_4px_30px] shadow-foreground/10">
            <div className="relative flex h-[54px] w-full items-center justify-between gap-2 px-5">
              <Drawer key={pathname}>
                <DrawerTrigger asChild>
                  <button className="p-2 text-[21px] text-foreground/75 outline-none transition-all hover:text-foreground lg:hidden">
                    <Icon name="Menu" />
                  </button>
                </DrawerTrigger>
                <DrawerPortal>
                  <DrawerOverlay className="bg-background/50" />
                  <DrawerContent
                    className="z-[50] w-[280px] bg-background shadow-[0px_0px_30px] shadow-foreground/10"
                    side="left"
                  >
                    <div className="flex h-[54px] w-full items-center justify-between gap-2 px-5">
                      <div className="flex items-center justify-center gap-2">
                        <Icon
                          name="Crown"
                          className="h-[28px] text-foreground"
                        />

                        <span className="text-base-content hidden font-bold md:inline">
                          MmD
                        </span>
                      </div>

                      <DrawerClose asChild>
                        <button className="p-2 text-[21px] text-foreground/75 outline-none transition-all hover:text-foreground">
                          <Icon name="Close" />
                        </button>
                      </DrawerClose>
                    </div>

                    <DashboardNav
                      routes={routes}
                      className={
                        "h-[calc(100svh_-_56px)] w-full gap-1 px-5 md:w-full"
                      }
                    />
                  </DrawerContent>
                </DrawerPortal>
              </Drawer>

              <div className="ml-auto flex items-center justify-center gap-2">
                <ThemeChanger />

                <div className="flex h-10 w-10 bg-foreground/10 text-foreground">
                  <span className="inline-grid h-full w-full place-items-center">
                    M
                  </span>
                </div>
              </div>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

"use client";

import Link from "next/link";
import Icon from "../icon";
import MainNav from "./main-nav";
import { siteConfig } from "@/config";
import ThemeChanger from "../theme-changer";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";

const Header = () => {
  const [show, setShow] = useState<boolean>(true);
  const [showBorder, setShowBorder] = useState<boolean>(false);

  useEffect(() => {
    let lastY: number = 0;

    const handleScroll = () => {
      // get the scrollY position
      let { scrollY } = window;

      // if navbar is hidden keep track of scrollY
      if (!show) {
        lastY = scrollY;
      }

      // hide the navbar if it's visible and user scrolled down
      if (window.scrollY > lastY + 500) {
        setShow(false);
        lastY = scrollY;
      }
      // show the navbar if it's hidden and user scrolled up
      if (window.scrollY < lastY - 25) {
        setShow(true);
        lastY = scrollY;
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };

    /* eslint-disable */
  }, [setShow]);

  useEffect(() => {
    const handleScroll = () => {
      // get the scrolTop position
      if (!document.scrollingElement) return;

      let { scrollTop } = document.scrollingElement;

      // if scrollTop is 0 hide border
      if (scrollTop === 0) {
        setShowBorder(false);
        return;
      }

      if (scrollTop !== 0) {
        setShowBorder(true);
        return;
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };

    /* eslint-disable */
  }, [setShowBorder]);

  return (
    <div
      className={cn(
        "sticky z-[50] flex w-full border-b bg-background transition-[top] duration-500",
        showBorder ? "border-border" : "border-background",
        show ? "top-0" : "-top-[55px]",
      )}
    >
      <header className="relative mx-auto flex h-[54px] w-full max-w-[1300px] items-center justify-between  px-6 md:px-24">
        <MobileNav items={siteConfig.items} />

        <motion.div
          className=""
          transition={{
            ease: "backInOut",
            duration: 0.5,
          }}
          initial={{
            y: -60,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 font-medium"
          >
            <Icon
              name="Crown"
              className="aspect-square h-[28px] text-foreground"
            />
            {/* <span>mmdjamali</span> */}
          </Link>
        </motion.div>

        <MainNav items={siteConfig.items} />

        <ThemeChanger />
      </header>
    </div>
  );
};

export default Header;

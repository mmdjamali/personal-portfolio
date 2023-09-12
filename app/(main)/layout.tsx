"use client";

import { PropsWithChildren } from "react";

import Icon from "@/components/icon";
import Link from "next/link";
import MainNav from "@/components/layout/main-nav";
import { siteConfig } from "@/config";
import ThemeChanger from "@/components/theme-changer";
import SocialMedias from "@/components/social-medias";
import ScrollPosition from "@/components/scroll-position";

import { motion } from "framer-motion";
import Header from "@/components/layout/header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex w-full flex-col">
      <SocialMedias />
      <ScrollPosition />

      <Header />

      {children}
    </div>
  );
};

export default Layout;

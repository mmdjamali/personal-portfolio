"use client";

import { PropsWithChildren } from "react";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
};

export default Providers;

import { PropsWithChildren } from "react";

import SocialMedias from "@/components/social-medias";
import ScrollPosition from "@/components/scroll-position";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SocialMedias />
      <ScrollPosition />

      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;

import { PropsWithChildren } from "react";

import SocialMedias from "@/components/social-medias";
import ScrollPosition from "@/components/scroll-position";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ApiResponse } from "@/types/api";
import { SocialsEntity } from "@/types/entity";
import { env } from "@/env";

const fetchSocials = async () => {
  let error;
  let data;
  try {
    const res: ApiResponse<{ socials: SocialsEntity[] }> = await fetch(
      env.NEXT_PUBLIC_BACKEND_URL + "/api/socials",
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
        },
      },
    ).then((res) => res?.json());

    if (!res?.success) throw "Request was not successfull";

    data = res.data;
  } catch (err) {
    error = err;
  }

  return {
    data,
    error,
  };
};

const Layout = async ({ children }: PropsWithChildren) => {
  const { data } = await fetchSocials();

  return (
    <div className="relative flex min-h-screen flex-col">
      <SocialMedias socials={data?.socials?.sort() ?? []} />
      <ScrollPosition />

      <Header socials={data?.socials?.sort() ?? []} />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;

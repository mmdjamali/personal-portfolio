"use client";

import { IconKeyType } from "@/types";
import Icon from "./icon";
import Link from "next/link";

const SocialMedias = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[50] mx-auto hidden w-full max-w-[1300px] justify-end px-6 md:flex md:px-24">
      <div className="z-[50] my-auto hidden h-fit flex-col md:flex">
        {(["Telegram", "Github", "TwitterX"] as IconKeyType[]).map((_, idx) => {
          return (
            <Link
              href={""}
              className="pointer-events-auto z-[50] p-2 text-foreground/75 transition-colors hover:text-foreground"
              key={idx}
            >
              <Icon className="text-[21px]" name={_} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedias;

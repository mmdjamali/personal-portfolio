import Link from "next/link";
import Icon from "../icon";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="z-[50] mt-8 md:px-24">
      <footer className="mx-auto grid max-w-[1300px] px-4 pb-8 md:px-20">
        <div className="flex flex-col items-center justify-between gap-10 pb-16 pt-20 md:flex-row">
          <Icon name="Crown" className="h-[28px] text-[28px] text-foreground" />

          <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-4 md:mx-0">
            <div className="relative aspect-square h-6 overflow-hidden rounded-full bg-foreground/10">
              <Image
                fill
                alt="Mohammad Jamali"
                unoptimized
                src="https://github.com/mmdjamali.png"
              />
            </div>

            <p className="font-medium text-foreground/75">
              Made by{" "}
              <Link
                className="text-foreground underline"
                href={"https://github.com/mmdjamali.png"}
              >
                Mohammad Jamali
              </Link>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link href="https://github.com/mmdjamali/small-frontend">
              <Icon
                name="Github"
                className="text-[21px] text-foreground/75 transition-colors hover:text-foreground"
              />
            </Link>
            <Icon
              name="TwitterX"
              className="text-[21px] text-foreground/75 transition-colors hover:text-foreground"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="text-sm text-foreground/75">
            © Copyright 2023 Mohammad Jamali All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

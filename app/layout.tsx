import { cn } from "@/lib/utils";
import "../styles/style.css";
import type { Metadata } from "next";
import Providers from "@/components/providers";

export const generateMetadata = async ({}): Promise<Metadata> => ({
  title: "Mohammad Jamali | Developer",
  description: "Personal portfolio of self-taught developer Mohammad Jamali",
  publisher: "Mohammad Jamali",
  icons: {
    icon: "/favicon.svg",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        style={{ margin: "0px !important" }}
        className={cn("bg-background text-sm text-foreground")}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
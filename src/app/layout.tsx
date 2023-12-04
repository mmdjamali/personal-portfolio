import { cn } from "@/lib/utils";
import "../styles/style.css";
import type { Metadata } from "next";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";

export const generateMetadata = async ({}): Promise<Metadata> => ({
  title: "Mohammad Jamali | Developer",
  description: "Personal portfolio of self-taught developer Mohammad Jamali",
  publisher: "Mohammad Jamali",
  icons: {
    icon: "/crown.svg",
  },
  themeColor: "#212121",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={cn(
          "overflow-y-scroll",
          "bg-background text-sm text-foreground",
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
        {/* <Zoom /> */}
      </body>
    </html>
  );
}

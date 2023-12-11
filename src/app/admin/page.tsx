import AdminLogin from "@/components/admin-login";
import Icon from "@/components/icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Jamali | Admin",
};

const Page = () => {
  return (
    <main className="grid h-full w-full grid-cols-1 place-items-center">
      <AdminLogin />
    </main>
  );
};

export default Page;

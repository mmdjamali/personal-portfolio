import AdminLogin from "@/components/admin-login";
import Icon from "@/components/icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Jamali | Admin",
};

const Page = () => {
  return (
    <main className="grid h-full w-full grid-cols-1 place-items-center md:grid-cols-2">
      <div className="hidden h-full w-full items-center justify-center bg-black md:flex">
        <Icon
          name="Crown"
          className="m-12 aspect-square w-full max-w-xs text-white"
        />
      </div>

      <AdminLogin />
    </main>
  );
};

export default Page;

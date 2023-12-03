"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// import { env } from "@/env";

import Button from "@/components/ui/button";
import Otp from "@/components/auth/otp";

import useInputValuePattern, {
  PatternType,
} from "@/hooks/use-input-value-pattern";

import { cn, joinStrings } from "@/lib/utils";
// import toast from "../ui/toast";

import { ApiResponse } from "@/types/api";
import Icon from "./icon";
import { env } from "@/env";

// import Confetti from "js-confetti";

const AdminLogin = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailPatterns: PatternType[] = [
    {
      message: "Please don't leave this field empty.",
      pattern: /^.+$/,
    },
    {
      pattern: /^\S+@\S+\.\S+$/,
      message: "Please enter a valid email.",
    },
  ];

  const [email, registerEmail, emailError] = useInputValuePattern({
    defaultValue: "",
    delay: 200,
    patterns: emailPatterns,
  });
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleAuthRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      return;
      //   toast({
      //     varinat: "error",
      //     className: "alert-error",
      //     title: "You can't leave these fields empty!",
      //     description: "Please enter your credentials to continue.",
      //   });
    }

    if (emailError) {
      return;
      //   toast({
      //     varinat: "error",
      //     className: "alert-error",
      //     title: "Your credentails are not valid!",
      //     description: "Please enter your credentials carefully to continue.",
      //   });
    }

    setLoading(true);

    try {
      const res: ApiResponse<null> = await fetch(
        joinStrings(env.NEXT_PUBLIC_BACKEND_URL, "/api/auth"),
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            digits: otp.join(""),
          }),
        },
      ).then((res) => res?.json());

      if (!res?.success) {
        setLoading(false);
        // toast({
        //   varinat: "error",
        //   className: "alert-error",
        //   title: "Something went wrong!",
        //   description:
        //     res?.message ??
        //     "We are sorry for this experiance please try again.",
        // });
        return;
      }
    } catch (err) {
      setLoading(false);
      return;
      //   toast({
      //     varinat: "error",
      //     className: "alert-error",
      //     title: "Something went wrong!",
      //     description: "We are sorry for this experiance please try again.",
      //   });
    }

    setLoading(false);
    setSent(true);

    return;
    // toast({
    //   varinat: "success",
    //   className: "alert-success",
    //   title: "Otp generated successfully!",
    //   description:
    //     "Please check your mail inbox for the one time password that we sent.",
    // });
  };

  const handleValidationRequest = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!email || !otp.join("")) {
      return;
      //   toast({
      //     varinat: "error",
      //     className: "alert-error",
      //     title: "You can't leave these fields empty!",
      //     description: "Please enter your credentials to continue.",
      //   });
    }

    if (emailError) {
      return;
      //   toast({
      //     varinat: "error",
      //     className: "alert-error",
      //     title: "Your credentails are not valid!",
      //     description: "Please enter your credentials carefully to continue.",
      //   });
    }

    setLoading(true);

    try {
      const res: ApiResponse<null> = await fetch(
        joinStrings(env.NEXT_PUBLIC_BACKEND_URL, "/api/auth/validate"),
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            digits: otp.join(""),
          }),
        },
      ).then((res) => res?.json());

      if (!res?.success) {
        setLoading(false);
        // toast({
        //   varinat: "error",
        //   className: "alert-error",
        //   title: "Something went wrong!",
        //   description:
        //     res?.message ??
        //     "We are sorry for this experiance please try again.",
        // });
        return;
      }
    } catch (err) {
      setLoading(false);
      return;
      //   toast({
      //     varinat: "error",
      //     className: "alert-error",
      //     title: "Something went wrong!",
      //     description: "We are sorry for this experiance please try again.",
      //   });
    }

    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);

    // const conf = new Confetti();

    // conf.addConfetti();

    // setTimeout(() => {
    //   conf.clearCanvas();
    // }, 2000);

    // setTimeout(
    //   () => router.push(`/${pathname.split("/")?.[1] ?? "en"}/dashboard`),
    //   1000,
    // );

    return;
    // toast({
    //   varinat: "success",
    //   className: "alert-success",
    //   title: "You are loged in successfully!",
    //   description: "our team whishes you a great experiance.",
    // });
  };

  if (sent)
    return (
      <form
        onSubmit={handleValidationRequest}
        className="bg-base-100 mx-auto w-[min(450px_,_100%)] rounded-xl p-12 text-sm duration-500 animate-in fade-in-0 slide-in-from-bottom-8"
      >
        <div className="flex w-full flex-col gap-1">
          <h1 className="text-xl font-semibold text-foreground">
            Just one more step!
          </h1>
          <p className="text-foreground/75">
            We have sent your email a one time password, enter it to continue.
          </p>
        </div>

        <Otp className="mt-6" onChange={setOtp} value={otp} success={success} />

        <Button
          className={cn(
            "mt-6 flex h-10 w-full items-center justify-center bg-foreground px-5 font-medium capitalize text-background",
          )}
          loading={loading}
        >
          Continue
        </Button>
      </form>
    );

  return (
    <form
      onSubmit={handleAuthRequest}
      className="bg-base-100 mx-auto w-[min(450px_,_100%)] rounded-xl p-12 text-sm duration-500 animate-in fade-in-0 slide-in-from-bottom-8"
    >
      <div className="flex w-full flex-col gap-1">
        <h1 className="text-xl font-semibold text-foreground">Login</h1>
        <p className="text-foreground/75">
          Please provide your credentials to continue
        </p>
      </div>

      <div className="mt-6">
        <div className="relative">
          <Icon
            name="Mail"
            className="absolute inset-y-0 left-3 my-auto inline-grid place-items-center text-[18px] text-foreground"
          />

          <input
            {...registerEmail()}
            placeholder="Email"
            id="email"
            className="h-10 w-full border border-foreground/25 bg-background pl-10 !outline-none transition-all hover:border-foreground/40 focus:border-foreground/75"
          />
        </div>

        {emailError ? (
          <span className="mt-1 text-sm text-error animate-in slide-in-from-bottom-2">
            {emailError}
          </span>
        ) : null}
      </div>

      <Button
        loading={loading}
        className="mt-6 flex h-10 w-full items-center justify-center bg-foreground px-5 font-medium capitalize text-background"
      >
        {"Let's go!"}
      </Button>
    </form>
  );
};

export default AdminLogin;

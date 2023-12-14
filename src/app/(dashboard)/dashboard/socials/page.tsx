"use client";

import Icon from "@/components/icon";
import EditSocials from "@/components/socials/edit-form";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Spinner from "@/components/ui/spinner";
import { env } from "@/env";
import { IconKeyType, SocialsType } from "@/types";
import { ApiResponse } from "@/types/api";
import { SocialsEntity } from "@/types/entity";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<{ socials: SocialsEntity[] } | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    let error;
    let data;

    try {
      const res: ApiResponse<{ socials: SocialsEntity[] }> = await fetch(
        env.NEXT_PUBLIC_BACKEND_URL + "/api/socials",
        {
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        },
      ).then((res) => res?.json());

      if (!res?.success) {
        error = new Error("unsuccessfull.");
        data = null;
      } else {
        data = res.data;
        error = null;
      }
    } catch (err) {
      error = err;
    }

    return {
      data,
      error,
    };
  };

  useEffect(() => {
    const func = async () => {
      setLoading(true);
      const { data, error } = await fetchData();
      setLoading(false);
      setData(data ?? null);
      setError(error ?? null);
    };

    func();
  }, []);

  if ((error || !data) && !loading) return notFound();

  return (
    <main className="relative grid min-h-[calc(100svh_-_54px)] w-full flex-col items-start gap-4 bg-foreground/5 p-4 lg:gap-8 lg:p-8">
      {!loading && data ? (
        <EditSocials
          defaultData={data.socials.reduce(
            (prev, entity) => {
              if (entity.platform) {
                prev[entity.platform] = structuredClone(entity);
              }
              return prev;
            },
            {} as Record<SocialsType, SocialsEntity>,
          )}
        />
      ) : (
        <div className="col-span-2 grid h-full w-full place-items-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <Spinner />

            <span className="text-sm text-foreground">Loading...</span>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;

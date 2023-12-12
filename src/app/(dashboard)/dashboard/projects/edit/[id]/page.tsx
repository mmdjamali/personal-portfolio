"use client";

import EditProject from "@/components/project/edit-form";
import Spinner from "@/components/ui/spinner";
import { env } from "@/env";
import { ApiResponse } from "@/types/api";
import { ProjectEntity } from "@/types/entity";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: {
    id?: string;
  };
};

const Page = ({ params }: Props) => {
  const [data, setData] = useState<{ project: ProjectEntity } | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async ({ id }: { id: string }) => {
    let error;
    let data;

    try {
      const res: ApiResponse<{ project: ProjectEntity }> = await fetch(
        env.NEXT_PUBLIC_BACKEND_URL + "/api/project/" + id,
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
      if (!params?.id) return;

      setLoading(true);
      const { data, error } = await fetchData({ id: params.id });
      setLoading(false);
      setData(data ?? null);
      setError(error ?? null);
    };

    func();
  }, [params.id]);

  if (!params?.id) return notFound();

  if ((error || !data) && !loading) return notFound();

  return (
    <main className="relative grid min-h-[calc(100svh_-_54px)] w-full gap-4 bg-foreground/5 p-4 md:grid-cols-[320px_1fr] lg:gap-8 lg:p-8">
      {!loading && data ? (
        <EditProject defaultData={data.project} />
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
